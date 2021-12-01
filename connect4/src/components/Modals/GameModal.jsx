import React, { forwardRef, useContext, useEffect } from 'react';
import { Dialog, Divider, Grid, Slide, Stack, Typography } from '@mui/material';
import GameModalBar from './GameModalBar';
import Board from '../../domain/Board/Board';
import { SocketContext } from '../Contexts/SocketContext';
import { GameContext } from '../Contexts/GameContext';
import { UserContext } from '../Contexts/UserContext';
import Game from '../Classes/Game';
import GameStatusBar from '../StatusBars/GameStatusBar';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import GameTurnTimer from '../Timer/GameTurnTimer';

const Transition = forwardRef(function Transaction(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

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
    <Dialog
      fullScreen
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
              position='absolute'
              bottom='0'
              left='40%'
              spacing={4}
            >
              <Grid item>
                <GameStatusBar user={user} orientation='row' />
              </Grid>
              <Grid item>
                <Stack spacing={1}>
                  <Typography>It's test turn</Typography>
                  <GameTurnTimer />
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
  );
};

export default GameModal;
