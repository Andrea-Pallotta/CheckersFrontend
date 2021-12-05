import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { GameContext } from '../Contexts/GameContext';
import { SocketContext } from '../Contexts/SocketContext';
import { TimerContext } from '../Contexts/TimerContext';

/**
 * Create text to be displayed inside the game timer.
 *
 * @param {*} props
 * @return {React.Component}
 */
const renderTime = ({ remainingTime }) => {
  return (
    <Typography fontSize='1.5em' align='center'>
      {remainingTime === 0 ? 'Turn Skipped' : remainingTime}
    </Typography>
  );
};

/**
 * Create Game Timer.
 *
 * @returns {React.Component}
 */
const GameTurnTimer = () => {
  const { turnTimer } = useContext(TimerContext);
  const { gameState } = useContext(GameContext);
  const socket = useContext(SocketContext);
  return (
    <CountdownCircleTimer
      isPlaying
      size={80}
      strokeWidth={7}
      duration={10}
      key={turnTimer}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      onComplete={() => {
        socket.emit('game-move', gameState);
      }}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default GameTurnTimer;
