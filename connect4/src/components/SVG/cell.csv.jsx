import React, { useContext } from 'react';
import './svg.module.css';
import { colorByUser } from '../Constants/Colors';
import { GameContext } from '../Contexts/GameContext';
import { SocketContext } from '../API/socket';

const BoardCell = ({ value, cx, cy, x, y }) => {
  const game = useContext(GameContext);
  const socket = useContext(SocketContext);

  const setCell = () => {
    socket.emit()
  };

  let hoverColor = colorByUser(game.player1);
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
      onClick={setCell}
    />
  );
};

export default BoardCell;
