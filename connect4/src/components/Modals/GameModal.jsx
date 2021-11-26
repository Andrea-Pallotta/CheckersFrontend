import React, { forwardRef, useReducer, useState } from 'react';
import { Dialog, Slide } from '@mui/material';
import GameModalBar from './GameModalBar';
import Board from '../../domain/Board/Board';
import { GameContext } from '../Contexts/GameContext';
import { Box } from '@mui/system';
import { deepCloneBoard } from '../Constants/Actions';

const Transition = forwardRef(function Transaction(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const initialState = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  board: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  gameEnded: false,
  message: '',
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'toggleTurn':
      return {
        ...initialState,
        board: action.board,
      };
    case 'gameEnded':
      return {
        ...state,
        gameEnded: true,
        message: action.message,
        board: action.board,
      };
    case 'updateMessage':
      return {
        ...state,
        message: action.message,
      };
    default:
      throw Error(`Action "${action.type}" is not a valid action.`);
  }
};

const GameModal = ({ open, handleClose }) => {
  const [openChat, setOpenChat] = useState(false);
  const [gameState, dispatchGameState] = useReducer(gameReducer, initialState);

  const playerAction = (x, y) => {
    if (!gameState.gameEnded) {
      let board = deepCloneBoard(gameState.board);
    }
  };

  const handleOpenChat = () => {
    setOpenChat();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <GameModalBar handleClose={handleClose} handleOpenChat={handleOpenChat} />
      <GameContext.Provider value={initialState}>
        <Box display='flex' fullWidth height='100%' bgcolor='lightgreen'>
          <Board />
        </Box>
      </GameContext.Provider>
    </Dialog>
  );
};

export default GameModal;
