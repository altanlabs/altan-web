import React, { memo } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, Box, Typography, Stack, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/system';

const VersionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: -16,
    top: 0,
    bottom: 0,
    width: 2,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: -16,
    top: '50%',
    width: 16,
    height: 2,
  },
}));

const VersionDot = styled(Box)(({ theme }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  marginRight: theme.spacing(2),
}));

const VersionDialog = ({ open, onClose, versions, templateType }) => {
  console.log("versions", versions);

  // Sort versions by date_creation, most recent first
  const sortedVersions = [...versions].sort((a, b) => new Date(b.date_creation) - new Date(a.date_creation));

  const getNavigationPath = () => {
    switch (templateType) {
      case 'workflow':
        return '/flows';
      case 'agent':
        return '/agents';
      // Add more cases for other template types as needed
      default:
        return '/';
    }
  };

  // Assuming all versions have the same branch for now
  const branch = sortedVersions[0]?.branch || 'master';

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Select Version</Typography>
          <FormControl variant="filled" size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="branch-select-label">Branch</InputLabel>
            <Select
              labelId="branch-select-label"
              id="branch-select"
              value={branch}
              onChange={() => {}} // No functionality for now
              label="Branch"
            >
              <MenuItem value={branch}>{branch}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={1} sx={{ position: 'relative', pl: 2 }}>
          {sortedVersions.map((version, index) => (
            <VersionItem
              key={index}
              sx={{
                backgroundColor: index === 0 ? 'primary.main' : 'transparent',
                borderRadius: 1,
              }}
            >
              <VersionDot />
              <Box flexGrow={1}>
                <Typography variant="subtitle1">
                  Version {version.version}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(version.date_creation).toLocaleString()} - {version.description || 'No description'}
                </Typography>
              </Box>
              <Button
                size='large'
                variant="soft"
                color="inherit"
                sx={{mr: 1}}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = `${getNavigationPath()}?template=${version.id}`;
                }}
              >
                Clone
              </Button>
            </VersionItem>
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(VersionDialog);
