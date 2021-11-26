import React from 'react';
import BoardCell from './cell.csv.jsx';

const computeX = (index) => {
  return 50 + 100 * parseInt(index);
};

const BoardColumn = ({ x, column }) => {
  return (
    <svg x={100 * x} y='0'>
      {column.map((value, index) => {
        return (
          <BoardCell
            key={`cell-${x}-${index}`}
            x={x}
            y={index}
            value={value}
            cx={50}
            cy={computeX(index)}
          />
        );
      })}
      <rect width='100' height='600' fill='cadetblue' mask='url(#cell-mask)' />
    </svg>
  );
};

export default BoardColumn;
