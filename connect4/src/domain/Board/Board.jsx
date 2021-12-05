import { Box } from '@mui/system';
import React, { useContext } from 'react';
import BoardPattern from '../../components/SVG/pattern.csv.jsx';
import BoardColumn from '../../components/SVG/column.csv.jsx';
import { GameContext } from '../../components/Contexts/GameContext.jsx';

/**
 * Game board component.
 *
 * @return {React.Component}
 */
const Board = () => {
  const { gameState } = useContext(GameContext);

  return (
    <Box mt={10}>
      <svg
        width='700'
        height='600'
        xmlns='http://www.w3.org/2000/svg'
        pointerEvents='none'
      >
        <BoardPattern />
        <rect width='700' height='600' mask='url(#cell-mask)' fill='#CED4DA' />
        {gameState.board.map((column, index) => {
          return (
            <BoardColumn key={`column-${index}`} x={index} column={column} />
          );
        })}
      </svg>
    </Box>
  );
};

export default Board;
