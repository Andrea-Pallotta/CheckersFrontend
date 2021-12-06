import React, { forwardRef, useContext, useEffect } from 'react';
import { Dialog, Grid, Slide, Stack, Typography } from '@mui/material';
import { SocketContext } from '../Contexts/SocketContext';
import { GameContext } from '../Contexts/GameContext';
import { UserContext } from '../Contexts/UserContext';
import { TimerContext } from '../Contexts/TimerContext';
import Game from '../Classes/Game';

import { Board } from '../../imports/domain.imports';
import { GameModalBar, GameStatusBar } from '../../imports/components.imports';

/**
 * Create MUI dialog animation.
 *
 */
const Transition = forwardRef(function Transaction(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

/**
 * Create MUI Dialog containing the game events.
 *
 * @param {*} props
 * @return {*}
 */
const GameModal = ({ open, handleClose }) => {
  const socket = useContext(SocketContext);
  const { gameState, setGameState } = useContext(GameContext);
  const { user } = useContext(UserContext);

  const { setTurnTimer } = useContext(TimerContext);

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
    socket.on('send-move', (state) => {
      setGameState(Game.fromJSON(state));

      setTurnTimer(10);
      console.log('setting timer');
    });
    return () => {
      socket.off('send-move');
      // window.removeEventListener('beforeunload', unloadCallback);
    };
  }, [setGameState, setTurnTimer, socket]);

  return (
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
                <GameStatusBar player={gameState.player1} orientation='row' />
              </Grid>
              <Grid item>
                <Stack spacing={1}>
                  <Typography>{gameState.message}</Typography>
                  {/* {gameState.winner === undefined && <GameTurnTimer />} */}
                </Stack>
              </Grid>
              <Grid item>
                <GameStatusBar
                  player={gameState.player2}
                  orientation='row-inverse'
                />
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
