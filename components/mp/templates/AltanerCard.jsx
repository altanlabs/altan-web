import React, { memo, useState, useCallback } from 'react';
import { Typography, Box, useTheme, Card, Stack } from '@mui/material';
import IconRenderer from '@/components/IconRenderer';
import CustomAvatar from '@/components/CustomAvatar';
import addAccountIdToUrl from '@/utils/addAccountIdToUrl';
import Link from 'next/link';
import styles from '../style.module.scss';

const AltanerCard = memo(({ template }) => {
  const icon = template?.meta_data?.icon_url || "https://api.altan.ai/platform/media/07302874-5d8b-46e5-ad18-6570f8ba8258?account_id=9d8b4e5a-0db9-497a-90d0-660c0a893285";
  const logo = template.account?.company?.logo_url || template.account?.owner?.person?.avatar_url;


  return (
    <>
      <Link href={`/marketplace/${template.public_name}`}>

        <div className="p-4 bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">          
          <Stack direction="row" spacing={2} alignItems="center" paddingBottom={1}>
            <IconRenderer
              icon={icon.startsWith("@lottie:") ? `${icon}:autoplay,loop` : icon}
              size={62}
              color="white"
              sx={{ borderRadius: '20%' }}

            />
            <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white' }}>
              {template.name || 'Unnamed Template'}
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, color: 'white' }}>
            {template.description || 'No description available.'}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ position: 'absolute', bottom: 8, right: 8 }}>
            <CustomAvatar sx={{ width: 24, height: 24 }} src={addAccountIdToUrl(logo, template?.account?.id)} name={template.account?.name || 'Unknown Account'} />
            <Typography variant="caption" color="text.secondary" sx={{ color: 'white' }}>
              by {template.account?.company?.name || template.account?.name || 'Unknown'}
            </Typography>
          </Stack>

          {template.is_verified && (
            <Stack direction="row" spacing={1} alignItems="center" sx={{ position: 'absolute', bottom: 8, left: 8 }}>
              <Typography variant="caption" color="success.main" sx={{ color: 'white' }}>
                ✔ Verified
              </Typography>
            </Stack>
          )}
        </div>
      </Link>
    </>
  );
});

export default memo(AltanerCard);
