import React, { useContext } from 'react';
import './svg.module.css';
import colorByUser from '../Constants/Colors';
import { GameContext } from '../Contexts/GameContext';
import { SocketContext } from '../Contexts/SocketContext';
import { UserContext } from '../Contexts/UserContext';
import { useSnackbar } from 'notistack';
import Game from '../Classes/Game';

/**
 * Board cell svg component
 *
 * @param {*} props
 * @returns
 */
const BoardCell = ({ value, cx, cy, x, y }) => {
  const { gameState } = useContext(GameContext);
  const socket = useContext(SocketContext);
  const { user } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  /**
   * Set updated move to the backend.
   *
   */
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

  const showGameEnded = () => {
    enqueueSnackbar('The game ended! Queue again.', {
      variant: 'info',
    });
  };

  return (
    <circle
      cx={cx}
      cy={cy}
      r='35'
      fill={colorByUser(value)}
      pointerEvents='all'
      onClick={gameState.gameEnded ? showGameEnded : sendBoard}
    />
  );
};

export default BoardCell;
