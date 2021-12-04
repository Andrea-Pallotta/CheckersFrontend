import { Fab } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

const SendButton = ({ value, handleSendMessage }) => {
  return (
    <Fab
      sx={{ marginLeft: '0.5em' }}
      color='primary'
      aria-label='add'
      onClick={(event) => {
        handleSendMessage(event, value);
      }}
    >
      <SendIcon />
    </Fab>
  );
};

export default SendButton;
