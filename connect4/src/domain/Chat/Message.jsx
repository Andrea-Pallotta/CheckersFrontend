import React from 'react';
import Stack from '@mui/material/Stack';
import MessageReceived from '../../components/Messages/MessageReceived';
import MessageSent from '../../components/Messages/MessageSent';

export default function Message({ author, message, time }) {
  return (
    <Stack spacing={1}>
      {author ? (
        <Stack>
          <MessageReceived author={author} message={message} time={time} />
        </Stack>
      ) : (
        <Stack justifyContent='flex-end' alignItems='flex-end'>
          <MessageSent message={message} time={time} />
        </Stack>
      )}
    </Stack>
  );
}
