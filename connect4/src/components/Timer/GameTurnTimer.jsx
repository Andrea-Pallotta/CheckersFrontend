import { Typography } from '@mui/material';
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
  return (
    <Typography fontSize='1.5em' align='center'>
      {remainingTime === 0 ? 'Too late' : remainingTime}
    </Typography>
  );
};

const GameTurnTimer = () => {
  return (
    <CountdownCircleTimer
      isPlaying
      size={80}
      strokeWidth={7}
      duration={5}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      onComplete={() => {}}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default GameTurnTimer;
