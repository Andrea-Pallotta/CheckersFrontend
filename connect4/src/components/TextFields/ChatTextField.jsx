import { TextField } from '@mui/material';
import React from 'react';

const ChatTextField = (props) => {
  return (
    <TextField
      id='outline-multiline-flexible'
      label={`Type a message (${
        props.maxLength - props.value.length
      } chars left)`}
      value={props.value}
      onChange={props.handleTextFieldValueChange}
      fullWidth
      inputProps={{ maxLength: props.maxLength }}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          props.handleSendMessage(event, props.value);
        }
      }}
    />
  );
};

export default ChatTextField;
