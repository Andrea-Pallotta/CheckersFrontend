import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { GameTimer } from '../../imports/components.imports';
import { SocketContext } from '../Contexts/SocketContext';

const GameChallengeModal = ({ open, handleClose, challenger }) => {
  const socket = useContext(SocketContext);

  const responseChallenge = (status) => {
    socket.emit('challenge-response', { username: challenger, status });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant='h4' color='primary' fontWeight='semibold'>
          NEW INCOMING CHALLENGE!
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          justify: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <DialogContentText mb='1em'>
          <Typography variant='h6'>
            {challenger} challenged you to a game!
          </Typography>
        </DialogContentText>
        <GameTimer onComplete={() => responseChallenge('decline')} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => responseChallenge('decline')}>
          Decline
        </Button>
        <Button onClick={() => responseChallenge('accept')}>Accept</Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameChallengeModal;
