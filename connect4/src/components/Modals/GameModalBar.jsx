import React, { useState } from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MailIcon from '@mui/icons-material/Mail';

const GameModalBar = ({ handleClose, handleOpenChat }) => {
  const [notifications, setNotifications] = useState(3);

  const notificationsLabel = () => {
    if (notifications === 0) {
      return 'no notifications';
    } else if (notifications > 99) {
      return 'more than 99 notifications';
    } else {
      return `${notifications} notifications`;
    }
  };

  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          onClick={handleClose}
          aria-label='close'
        >
          <CloseIcon />
        </IconButton>

        <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
          Game
        </Typography>

        <IconButton
          aria-label={notificationsLabel}
          onClick={handleOpenChat}
          color='error'
        >
          <Badge badgeContent={notifications} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default GameModalBar;
