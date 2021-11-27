import React, { forwardRef, useContext, useState } from 'react';
import { Dialog, Slide } from '@mui/material';
import GameModalBar from './GameModalBar';
import Board from '../../domain/Board/Board';
import { Box } from '@mui/system';
import { SocketContext } from '../API/socket';
import { GameContext } from '../Contexts/GameContext';

const Transition = forwardRef(function Transaction(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const GameModal = ({ open, handleClose }) => {
  const socket = useContext(SocketContext);
  const { gameState } = useContext(GameContext);

  const closeModal = () => {
    socket.emit('leave-room', gameState.roomId);
    socket.emit('join-public-chat');
    handleClose();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={closeModal}
      TransitionComponent={Transition}
    >
      <GameModalBar handleClose={closeModal} />
      <Box display='flex' fullWidth height='100%'>
        <Board />
      </Box>
    </Dialog>
  );
};

export default GameModal;
