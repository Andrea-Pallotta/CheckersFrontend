import React, { useContext, useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { GameContext } from '../Contexts/GameContext';
import { UserContext } from '../Contexts/UserContext';
import colorByUser from '../Constants/Colors';
import ConfirmForfeitDialog from '../Dialogs/ConfirmForfeitDialog';
import GameChatModal from './GameChatModal';

const GameModalBar = ({ handleClose }) => {
  const [openFoferit, setOpenForfeit] = useState(false);

  const { gameState } = useContext(GameContext);
  const { user } = useContext(UserContext);

  const title = `Game against ${
    gameState.player1.username === user.username
      ? gameState.player2.username
      : gameState.player1.username
  }`;

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
          onClick={
            gameState.gameEnded && gameState.winner
              ? handleClose
              : handleOpenForfeit
          }
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

        <GameChatModal />
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
