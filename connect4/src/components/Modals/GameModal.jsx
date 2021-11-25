import React, { forwardRef, useState } from 'react';
import { Dialog, Slide } from '@mui/material';
import GameModalBar from './GameModalBar';
import Board from '../../domain/Board/Board';
import { GameContext } from '../Contexts/GameContext';

const Transition = forwardRef(function Transaction(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const GameModal = ({ open, handleClose }) => {
  const [notifications, setNotifications] = useState(0);
  const [openChat, setOpenChat] = useState(false);
  const [gameState, setGameState] = useState();

  const notificationsLabel = () => {
    if (notifications === 0) {
      return 'no notifications';
    } else if (notifications > 99) {
      return 'more than 99 notifications';
    } else {
      return `${notifications} notifications`;
    }
  };

  const handleOpenChat = () => {};

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <GameModalBar handleClose={handleClose} handleOpenChat={handleOpenChat} />
      <GameContext.Provider value={gameState}>
        <Board />
      </GameContext.Provider>
    </Dialog>
  );
};

export default GameModal;
