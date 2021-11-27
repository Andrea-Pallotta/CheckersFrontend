import { Box } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import BoardPattern from '../../components/SVG/pattern.csv.jsx';
import BoardColumn from '../../components/SVG/column.csv.jsx';
import { GameContext } from '../../components/Contexts/GameContext.jsx';
import { SocketContext } from '../../components/API/socket.js';
import { Game } from '../../models/index.js';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const Board = () => {
  const { gameState, setGameState } = useContext(GameContext);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on('send-move', (state) => {
      setGameState(Game.fromJSON(state));
    });
    return () => socket.off('send-move');
  });

  return (
    <Box ml={10} mt={15}>
      {gameState.message && <Div>{gameState.message}</Div>}
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 1600 750'
        xmlns='http://www.w3.org/2000/svg'
        pointerEvents='none'
      >
        <BoardPattern />
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
