import React, { memo, useState } from 'react';
import { Card, Typography, Stack } from '@mui/material';
import IconRenderer from '@/components/IconRenderer';
import VersionDialog from './VersionDialog';
import CustomAvatar from '@/components/CustomAvatar';
import addAccountIdToUrl from '@/utils/addAccountIdToUrl';

const FormCard = ({ template }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logo = template.account?.company?.logo_url || template.account?.owner?.person?.avatar_url;

  return (
    <>
      <div className="p-4 bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"
      onClick={handleOpen}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <IconRenderer icon="fluent:form-24-filled" color="white" size={32}/>
          <Typography variant="h5" component="div" gutterBottom color="white">
            {template.name || 'Unnamed Template'}
          </Typography>
        </Stack>

        <Typography variant="body2" color="white" sx={{ mb: 4 }}>
          {template.description || 'No description available.'}
        </Typography>
        
        <Stack direction="row" spacing={1} alignItems="center" sx={{ position: 'absolute', bottom: 8, right: 8 }}>
          <CustomAvatar sx={{ width: 24, height: 24 }} src={addAccountIdToUrl(logo, template?.account?.id)} name={template.account?.name || 'Unknown Account'} />
          <Typography variant="caption" color="white">
            by {template.account?.company?.name || template.account?.name || 'Unknown'}
          </Typography>
        </Stack>
        
        {template.is_verified && (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ position: 'absolute', bottom: 8, left: 8 }}>
            <Typography variant="caption" color="white">
              ✔ Verified
            </Typography>
          </Stack>
        )}
      </div>

      <VersionDialog
        open={open}
        onClose={handleClose}
        versions={template.versions || []}
        templateType="form"
      />
    </>
  );
};

export default memo(FormCard);
