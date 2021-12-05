import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import UserAvatar from '../Avatar/Avatar';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

/**
 * Component for received chat messages.
 *
 * @param {*} props
 * @return {React.Component}
 */
const MessageReceived = ({ author, message, time }) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{ p: 2, display: 'flex', alignItem: 'left', justifyContent: 'left' }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Stack>
        <UserAvatar
          name={author}
          busy={false}
          style={{
            width: 36,
            height: 36,
            boxShadow: '0 0 0 2px lightgray',
          }}
        />
        <Typography
          variant='caption'
          color='text.secondary'
          paddingTop={0.2}
          ml={0.5}
        >
          {author}
        </Typography>
      </Stack>
      <Stack spacing={0.5} sx={{ backgroundColor: '#E0' }} paddingLeft={1.5}>
        <Typography fontWeight={500} color='text.primary'>
          {message}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {time}
        </Typography>
      </Stack>
      <MoreHorizRoundedIcon style={{ display: hover ? 'block' : 'none' }} />
    </Box>
  );
};

export default MessageReceived;
