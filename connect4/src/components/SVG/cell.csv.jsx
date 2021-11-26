import React, { useContext } from 'react';
import './svg.module.css';
import { colorByUser } from '../Constants/Colors';
import { GameContext } from '../Contexts/GameContext';
import { SocketContext } from '../API/socket';
import { UserContext } from '../API/user';
import { useSnackbar } from 'notistack';
import Game from '../Classes/Game';

const BoardCell = ({ value, cx, cy, x, y }) => {
  const { gameState, setGameState } = useContext(GameContext);
  const socket = useContext(SocketContext);
  const user = useContext(UserContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const sendBoard = () => {
    console.log(x, y, gameState.board[x][y]);
    if (gameState.board[x][y] === 0) {
      var board = [...gameState.board];
      board[x][y] = 1;
      var newState = new Game(
        board,
        gameState.player1,
        gameState.player2,
        gameState.turn === 1 ? 2 : 1,
        gameState.roomId,
        gameState.message,
        gameState.gameEnded
      );
      socket.emit('game-move', newState);
    } else {
      enqueueSnackbar('You can only select empty tiles', {
        variant: 'error',
      });
    }
  };

  let hoverColor = colorByUser(gameState.player1);
  let hoverOpacity = '70%';

  if (value !== 0) {
    hoverColor = colorByUser(value);
    hoverOpacity = '100%';
  }

  return (
    <circle
      style={{ '--hover-color': hoverColor, '--hover-opacity': hoverOpacity }}
      cx={cx}
      cy={cy}
      r='45'
      fill={colorByUser(value)}
      stroke='lightgray'
      strokeWidth={3}
      pointerEvents='all'
      onClick={sendBoard}
    />
  );
};

export default BoardCell;
