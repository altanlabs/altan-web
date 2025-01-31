import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Modal, Chip, Card, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // For closing the modal
import { Properties } from 'csstype';
import axios from 'axios';

const modalStyle: Properties<string | number, string & {}> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100vh',
  border: 'none',
};

const FileComponent = ({ file }) => {
  console.log(file)
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframeDisplay = () => {
    setShowIframe(!showIframe);
  };

  return (
    <>
      <Card
        sx={{
          p: 1,
          m: 0.5,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            opacity: 0.7,
            transform: 'scale(1.01)'
          }
        }}
        onClick={toggleIframeDisplay}
      >

        <Stack direction="row" alignItems="center" spacing={1} >
          <Box
            component="img"
            src={`https://dashboard.altan.ai/assets/icons/files/ic_${file.meta_data.file_type}.svg`}
            sx={{
              ml: 1,
              mt: 1,
              width: '2.5rem',
              height: '2.5rem',
              objectFit: 'cover',
            }}
          />
          <Stack>
            <Typography
              variant="subtitle2"
              sx={{
                ml: 1,
                whiteSpace: 'nowrap',
                maxWidth: '200px',
                textOverflow: 'ellipsis',

              }}
            >
              {file.meta_data.file_name || file.meta_data.file_url}
            </Typography>
            {file.meta_data?.summary && (
              <Typography variant="caption" noWrap
                sx={{
                  ml: 1,
                  maxWidth: '340px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',

                }}>
                {file.meta_data.summary}
              </Typography>
            )}
          </Stack>

        </Stack>
      </Card>

      <Modal
        open={showIframe}
        onClose={toggleIframeDisplay}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={modalStyle}>


          <iframe
            src={`${file.signed_url}#view=FitH`}
            style={{
              border: 'none',
              width: '100%',
              height: '100%',
            }}
            title={file.meta_data.file_name}
          >
            Your browser does not support this file type.
          </iframe>
          <div>
            <Button color='error' variant='contained' onClick={toggleIframeDisplay} startIcon={<CloseIcon />}>
              Close
            </Button>
          </div>
        </div>

      </Modal>
    </>
  );
};


export const fetchFile = async (id) => {
  try {
    const response = await axios.get(`https://api.altan.ai/room/file/${id}/`);
    const { file } = response.data;
    return file;
  } catch (error) {
    throw new Error(error.message);
  }
};

const FileWidget = ({ id, name }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchFile(id)
      .then(product => {
        setFile(product);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch product", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Chip key={id} label="Loading..." />;
  }

  if (!file || hasError) {
    return <Chip key={id} label={name} />;
  }

  return <FileComponent file={file} />;
};

export default FileWidget;