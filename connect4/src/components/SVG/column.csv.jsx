import React from 'react';
import BoardCell from './cell.csv.jsx';

/**
 * Calculate the x-coord of the column based on map index.
 *
 * @param {number} index
 * @returns
 */
const computeX = (index) => {
  return 50 + 100 * parseInt(index);
};

/**
 * Generate a list of cells.
 *
 * @param {React.Component} props
 * @returns
 */
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
    </svg>
  );
};

export default BoardColumn;
