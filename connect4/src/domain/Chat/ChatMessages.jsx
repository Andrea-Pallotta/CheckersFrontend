import { Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { UserContext } from '../../components/Contexts/UserContext';
import Message from './Message';

const ChatMessages = ({ messages, messageRef }) => {
  const { user } = useContext(UserContext);
  return (
    <Stack style={{ height: '65vh', overflowY: 'auto' }}>
      {messages.length > 0 ? (
        messages.map((message) => {
          return (
            <Message
              author={message.sender === user.username ? null : message.sender}
              message={message.message}
              time={message.time}
              key={message.uuid}
            />
          );
        })
      ) : (
        <Typography variant='h7' ml={4} mt={4}>
          No messages yet.
        </Typography>
      )}
      <div ref={messageRef} />
    </Stack>
  );
};

export default ChatMessages;
