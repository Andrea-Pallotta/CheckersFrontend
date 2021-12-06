import { Fab } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

/**
 * Create Button with send icon.
 * @param {*} props
 * @returns React.Component
 */
const SendButton = ({ value, handleSendMessage }) => {
  return (
    <Fab
      sx={{ marginLeft: '0.5em' }}
      color='primary'
      disabled={
        !value.trimLeft() || value.trimLeft().length === 0 ? true : false
      }
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
