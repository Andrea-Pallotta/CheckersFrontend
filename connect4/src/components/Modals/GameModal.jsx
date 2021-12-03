import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { Dialog, Grid, Slide, Stack, Typography } from '@mui/material';
import GameModalBar from './GameModalBar';
import Board from '../../domain/Board/Board';
import { SocketContext } from '../Contexts/SocketContext';
import { GameContext } from '../Contexts/GameContext';
import { UserContext } from '../Contexts/UserContext';
import Game from '../Classes/Game';
import GameStatusBar from '../StatusBars/GameStatusBar';
import GameTurnTimer from '../Timer/GameTurnTimer';
import { TimerContext } from '../Contexts/TimerContext';

const Transition = forwardRef(function Transaction(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const GameModal = ({ open, handleClose }) => {
  const [turnTimer, setTurnTimer] = useState(30);
  const socket = useContext(SocketContext);
  const { gameState, setGameState } = useContext(GameContext);
  const { user } = useContext(UserContext);

  const closeModal = () => {
    if (gameState.gameEnded && gameState.winner) {
      handleClose();
    } else {
      const game = Game.fromJSON(gameState);
      game.setForfeit(user.username);
      socket.emit('forfeit-game', game);
    }
    socket.emit('join-public-chat');
  };

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = '';
      return '';
    };

    // window.addEventListener('beforeunload', unloadCallback);
    socket.on('game-forfeited', (state) => {
      setGameState(Game.fromJSON(state));
    });
    return () => {
      socket.off('game-forfeited');
      // window.removeEventListener('beforeunload', unloadCallback);
    };
  });

  return (
    <TimerContext.Provider value={{ turnTimer, setTurnTimer }}>
      <Dialog
        fullScreen
        width='100%'
        open={open}
        onClose={closeModal}
        TransitionComponent={Transition}
      >
        <GameModalBar handleClose={closeModal} />
        <Grid container spacing={2} height='100%'>
          <Grid item xs={2} sx={{ backgroundColor: '#F1F3F5' }} />
          <Grid item xs={8} justify='center'>
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              <Board />
              <Grid
                container
                direction='row'
                spacing={4}
                paddingTop={5}
                paddingLeft={50}
              >
                <Grid item>
                  <GameStatusBar user={user} orientation='row' />
                </Grid>
                <Grid item>
                  <Stack spacing={1}>
                    <Typography>{gameState.message}</Typography>
                    <GameTurnTimer timer={turnTimer} />
                  </Stack>
                </Grid>
                <Grid item>
                  <GameStatusBar user={user} orientation='row-inverse' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sx={{ backgroundColor: '#F1F3F5' }} />
        </Grid>
      </Dialog>
    </TimerContext.Provider>
  );
};

export default GameModal;
