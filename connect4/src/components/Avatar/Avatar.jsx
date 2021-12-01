import React from 'react';
import { Avatar, Badge } from '@mui/material';
import { styled } from '@mui/system';

export const nameToColor = (name) => {
  let hash = 0;
  let i;

  for (i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
};

export const avatarName = (name, props) => {
  return {
    sx: {
      bgcolor: nameToColor(name),
      ...props,
    },
    children: `${name.charAt(0).toUpperCase()}`,
  };
};

const OnlineBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: '0 0 0 1px lightgray',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.6s infinite ease-in-out',
      border: `1px solid currentColor`,
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0.7)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const BusyBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'red',
    color: 'red',
    boxShadow: '0 0 0 1px lightgray',
  },
}));

const UserAvatar = ({ name, busy = false, style }) => {
  return busy ? (
    <BusyBadge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
    >
      <Avatar {...avatarName(name, style)} />
    </BusyBadge>
  ) : (
    <OnlineBadge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
    >
      <Avatar {...avatarName(name, style)} />
    </OnlineBadge>
  );
};

export default UserAvatar;
