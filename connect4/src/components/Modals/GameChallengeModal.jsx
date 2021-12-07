import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { useContext } from 'react';
import {
  GameChallengePaper,
  GameTimer,
} from '../../imports/components.imports';
import { SocketContext } from '../Contexts/SocketContext';

const GameChallengeModal = ({ open, handleClose, challenger }) => {
  const socket = useContext(SocketContext);

  const responseChallenge = (status) => {
    socket.emit('challenge-response', { challenger, status });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={GameChallengePaper}
      aria-labelledby='draggable-dialog-title'
    >
      <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
        NEW CHALLENGE!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {challenger} challenged you to a game! Click `Accept` to start the
          game
        </DialogContentText>
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
