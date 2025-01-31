"use client"
import React, { memo, useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, Stack, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import IconRenderer from '@/components/IconRenderer';
import VersionDialog from './VersionDialog';
import CustomAvatar from '@/components/CustomAvatar';
import addAccountIdToUrl from '@/utils/addAccountIdToUrl';


const ConnectionTypeIcon = ({ connectionTypeId }) => {
  const [connectionType, setConnectionType] = useState(null);
  useEffect(() => {
    const fetchConnectionType = async () => {
      try {
        const response = await fetch(`https://api.altan.ai/integration/connection-type/${connectionTypeId}?is_compact=${true}`);
        if (response.ok) {
          const data = await response.json();
          setConnectionType(data.connection_type);
        } else {
          console.error('Failed to fetch connection type');
        }
      } catch (error) {
        console.error('Error fetching connection type:', error);
      }
    };

    fetchConnectionType();
  }, [connectionTypeId]);

  if (!connectionType) return null;

  return (
    <IconRenderer
      icon={connectionType.icon}
      size={36}
      color={connectionType.meta_data?.color || 'white'}
    />
  );
}

const WorkflowCard = ({ template }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const logo = template.account?.company?.logo_url || template.account?.owner?.person?.avatar_url;

  return (
    <>
      <div className="p-4 bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"
        onClick={handleOpen}
      >
        <Stack direction="row" spacing={1} sx={{ my: 1 }}>
          {template?.parent?.meta_data?.connection_types?.map(id => <ConnectionTypeIcon key={id} connectionTypeId={id} />)}
        </Stack>
        <Typography variant="h6" component="div" gutterBottom color="white">
          {template.name}
        </Typography>
        <Typography variant="body2" color="white" sx={{ mb: 4 }}>
          {template?.description || template.parent?.description || 'No description available.'}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ position: 'absolute', bottom: 8, right: 8 }}>
          <CustomAvatar sx={{ width: 24, height: 24 }} src={addAccountIdToUrl(logo, template?.account?.id)} name={template.account?.name || 'Unknown Account'} />
          <Typography variant="caption" color="white">
            by {template.account?.company?.name || template.account?.name}
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
        versions={template.versions}
        templateType="workflow"
      />
    </>
  );
};

export default memo(WorkflowCard);
