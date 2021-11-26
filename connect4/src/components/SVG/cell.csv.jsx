import React, { useContext, useEffect } from 'react';
import './svg.module.css';
import { colorByUser } from '../Constants/Colors';
import { GameContext } from '../Contexts/GameContext';

const BoardCell = ({ value, cx, cy, x, y }) => {
  const game = useContext(GameContext);

  const setCell = () => {
    game.board[x][y] = game.player;
    // setBoard((prevState) => {
    //   if (prevState[x][y] === 0) prevState[x][y] = player;
    //   return [...prevState];
    // });
  };

  let hoverColor = colorByUser(game.player);
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
