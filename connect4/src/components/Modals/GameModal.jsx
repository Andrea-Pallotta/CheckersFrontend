import React, { forwardRef, useContext, useEffect } from 'react';
import { Dialog, Slide } from '@mui/material';
import GameModalBar from './GameModalBar';
import Board from '../../domain/Board/Board';
import { Box } from '@mui/system';
import { SocketContext } from '../API/socket';
import { GameContext } from '../Contexts/GameContext';
import { UserContext } from '../API/user';
import Game from '../Classes/Game';

const Transition = forwardRef(function Transaction(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const GameModal = ({ open, handleClose }) => {
  const socket = useContext(SocketContext);
  const { gameState, setGameState } = useContext(GameContext);
  const user = useContext(UserContext);

  const closeModal = () => {
    if (gameState.gameEnded && gameState.winner) {
      handleClose();
    } else {
      const game = Game.fromJSON(gameState);
      game.setForfeit(user.username);
      socket.emit('forfeit-game', game);
    }
  };

  useEffect(() => {
    socket.on('game-forfeited', (state) => {
      console.log(state);
      setGameState(Game.fromJSON(state));
    });
    return () => socket.off('game-forfeited');
  });

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
