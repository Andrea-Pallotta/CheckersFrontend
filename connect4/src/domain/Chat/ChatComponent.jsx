import React, { useContext, useEffect, useState } from 'react';
import { Divider, Grid } from '@mui/material';
import ChatMessages from './ChatMessages';
import { SocketContext } from '../../components/Contexts/SocketContext';
import { useSnackbar } from 'notistack';

import { ChatTextField, SendButton } from '../../imports/components.imports';

/**
 * Component with a list of messages and a textfield to send new messages.
 *
 * @param {*} props
 * @returns
 */
const ChatComponent = ({ messages, to, messageRef, maxLength }) => {
  const [value, setValue] = useState('');
  const socket = useContext(SocketContext);
  const { enqueueSnackbar } = useSnackbar();

  /**
   * Scroll to the last message.
   */
  const scrollToEndMessage = () => {
    messageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Set new message to what the user typed in the textfield.
   *
   * @param {*} event
   */
  const handleTextFieldValueChange = (event) => {
    setValue(event.target.value.trimLeft());
  };

  /**
   * Validate message and send it to the server.
   *
   * @param {*} event
   */
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
          <ChatTextField
            maxLength={maxLength}
            value={value}
            handleTextFieldValueChange={handleTextFieldValueChange}
            handleSendMessage={handleSendMessage}
          />
        </Grid>
        <Grid item xs={1} align='right'>
          <SendButton value={value} handleSendMessage={handleSendMessage} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatComponent;
