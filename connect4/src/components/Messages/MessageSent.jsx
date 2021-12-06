import React, { useContext } from 'react';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { UserContext } from '../Contexts/UserContext';

import { UserAvatar } from '../../imports/components.imports';
/**
 * Component for sent chat messages.
 *
 * @param {*} props
 * @return {React.Component}
 */
const MessageSent = ({ message, time }) => {
  const { user } = useContext(UserContext);
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'right',
      }}
      ml='auto'
    >
      <Stack spacing={0.5} sx={{ backgroundColor: '#E0' }} paddingRight={3}>
        <Typography fontWeight={500} color='text.primary'>
          {message}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {time}
        </Typography>
      </Stack>

      <Stack>
        <UserAvatar
          name={user.username}
          style={{ width: 36, height: 36, boxShadow: '0 0 0 2px lightgray' }}
        />
        <Typography variant='caption' color='text.secondary'></Typography>
      </Stack>
    </Box>
  );
};

export default MessageSent;
