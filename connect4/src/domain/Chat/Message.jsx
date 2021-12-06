import React from 'react';
import Stack from '@mui/material/Stack';

import { MessageReceived, MessageSent } from '../../imports/components.imports';

/**
 * Generic message component. Renders message depending on the type of message.
 *
 * @param {*} props
 * @returns {React.Component}
 */
const Message = ({ author, message, time }) => {
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
};

export default Message;
