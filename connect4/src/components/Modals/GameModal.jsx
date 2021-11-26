import React, { forwardRef, useContext, useState } from 'react';
import { Dialog, Slide } from '@mui/material';
import GameModalBar from './GameModalBar';
import Board from '../../domain/Board/Board';
import { Box } from '@mui/system';
import { GameContext } from '../Contexts/GameContext';

const Transition = forwardRef(function Transaction(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const GameModal = ({ open, handleClose }) => {
  const [openChat, setOpenChat] = useState(false);

  const handleOpenChat = () => {
    setOpenChat();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <GameModalBar handleClose={handleClose} handleOpenChat={handleOpenChat} />
      <Box display='flex' fullWidth height='100%' bgcolor='lightgreen'>
        <Board />
      </Box>
    </Dialog>
  );
};

export default GameModal;
