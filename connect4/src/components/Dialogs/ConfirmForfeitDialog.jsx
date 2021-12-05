import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

/**
 * Create dialog to confirm game forfeit.
 *
 * @param {*} props
 * @return {React.Component}
 */
const ConfirmForfeitDialog = (props) => {
  const { open, handleCloseModal, handleCloseForfeit } = props;

  /**
   * Close this dialog and game modal screen.
   *
   */
  const handleForfeit = () => {
    handleCloseForfeit();
    handleCloseModal();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseForfeit}
      aria-labelledby='forfeit-dialog-title'
      aria-describedby='forfeit-dialog-description'
    >
      <DialogTitle id='forfeit-dialog-title'>
        {'Are you sure you want to forfeit the game?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='forfeit-dialog-description'>
          If you forfeit the game you will automatically lose the game. You will
          also lose extra points (in addition to the losing points)
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseForfeit}>Cancel</Button>
        <Button onClick={handleForfeit}>Forfeit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmForfeitDialog;
