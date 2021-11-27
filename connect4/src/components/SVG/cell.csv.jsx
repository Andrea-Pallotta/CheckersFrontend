import React, { useContext } from 'react';
import './svg.module.css';
import { colorByUser } from '../Constants/Colors';
import { GameContext } from '../Contexts/GameContext';
import { SocketContext } from '../API/socket';
import { UserContext } from '../API/user';
import { useSnackbar } from 'notistack';
import Game from '../Classes/Game';

const BoardCell = ({ value, cx, cy, x, y }) => {
  const { gameState } = useContext(GameContext);
  const socket = useContext(SocketContext);
  const user = useContext(UserContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const sendBoard = () => {
    if (gameState.turn === user.player) {
      if (gameState.board[x][y] === 0) {
        const game = Game.fromJSON(gameState);
        game.updateMove({ x: x, y: game.getFirstOpenTile(x) });
        socket.emit('game-move', game);
      } else {
        enqueueSnackbar('You can only select empty tiles', {
          variant: 'error',
        });
      }
    } else {
      enqueueSnackbar("It's not your turn yet!", {
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
      pointerEvents={gameState.gameEnded ? 'none' : 'all'}
      onClick={sendBoard}
    />
  );
};

export default BoardCell;
