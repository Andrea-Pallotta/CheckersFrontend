import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
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
const GameTimer = ({ onComplete }) => {
  const { turnTimer } = useContext(TimerContext);

  return (
    <CountdownCircleTimer
      isPlaying
      size={80}
      strokeWidth={7}
      duration={10}
      key={turnTimer}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      onComplete={onComplete}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default GameTimer;
