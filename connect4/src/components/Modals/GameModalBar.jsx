import React, { useContext, useState } from 'react';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MailIcon from '@mui/icons-material/Mail';
import { GameContext } from '../Contexts/GameContext';
import { UserContext } from '../API/user';
import { colorByUser } from '../Constants/Colors';
import ConfirmForfeitDialog from '../Dialogs/ConfirmForfeitDialog';

const GameModalBar = ({ handleClose }) => {
  const [notifications, setNotifications] = useState(0);
  const [openFoferit, setOpenForfeit] = useState(false);

  const { gameState } = useContext(GameContext);
  const user = useContext(UserContext);

  const title = `Game against ${
    gameState.player1.username === user.username
      ? gameState.player2.username
      : gameState.player1.username
  }`;

  const notificationsLabel = () => {
    if (notifications === 0) {
      return 'no notifications';
    } else if (notifications > 99) {
      return 'more than 99 notifications';
    } else {
      return `${notifications} notifications`;
    }
  };

  const handleOpenForfeit = () => {
    setOpenForfeit(true);
  };

  const handleCloseForfeit = () => {
    setOpenForfeit(false);
  };

  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          onClick={handleOpenForfeit}
          aria-label='close'
        >
          <CloseIcon />
        </IconButton>

        <Typography
          sx={{ ml: 2, flex: 1, color: colorByUser(gameState.turn) }}
          variant='h6'
          component='div'
        >
          {title}
        </Typography>

        <Button
          variant='contained'
          color='secondary'
          aria-label={notificationsLabel}
          endIcon={
            <Badge badgeContent={notifications}>
              <MailIcon />
            </Badge>
          }
          onClick={handleOpenForfeit}
        >
          GAME CHAT
        </Button>
      </Toolbar>

      <ConfirmForfeitDialog
        open={openFoferit}
        handleCloseModal={handleClose}
        handleCloseForfeit={handleCloseForfeit}
      />
    </AppBar>
  );
};

export default GameModalBar;
