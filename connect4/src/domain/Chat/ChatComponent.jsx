import React, { useContext, useEffect, useState } from 'react';
import { Divider, Fab, Grid, TextField } from '@mui/material';
import ChatMessages from './ChatMessages';
import SendIcon from '@mui/icons-material/Send';
import { SocketContext } from '../../components/Contexts/SocketContext';
import { useSnackbar } from 'notistack';

const ChatComponent = ({ messages, to, messageRef }) => {
  const [value, setValue] = useState('');
  const socket = useContext(SocketContext);
  const { enqueueSnackbar } = useSnackbar();

  const scrollToEndMessage = () => {
    messageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTextFieldValueChange = (event) => {
    setValue(event.target.value.trimLeft());
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (value.trim().length > 0) {
      socket.emit(`${to}`, value);
    } else {
      enqueueSnackbar('Cannot send an empty message', {
        variant: 'warning',
      });
    }
    setValue('');
  };

  useEffect(scrollToEndMessage, [messages]);

  return (
    <Grid item xs={9}>
      <ChatMessages messages={messages} messageRef={messageRef} />
      <Divider />
      <Grid container style={{ padding: '20px' }}>
        <Grid item xs={11}>
          <TextField
            id='outline-multiline-flexible'
            label={`Type a message (${100 - value.length} chars left)`}
            value={value}
            onChange={handleTextFieldValueChange}
            fullWidth
            inputProps={{ maxLength: 100 }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSendMessage(event, value);
              }
            }}
          />
        </Grid>
        <Grid item xs={1} align='right'>
          <Fab
            color='primary'
            aria-label='add'
            onClick={(event) => {
              handleSendMessage(event, value);
            }}
          >
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatComponent;
