import { Box } from "@mui/system";
import React from "react";
import BoardPattern from "../../components/SVG/pattern.csv.jsx";
import BoardColumn from "../../components/SVG/column.csv.jsx";
import BoardCell from "../../components/SVG/cell.csv.jsx";

const Board = () => {
  const boardTest = [
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2],
    [0, 0, 1, 1, 1, 2],
    [0, 0, 1, 1, 1, 2],
    [0, 0, 1, 1, 1, 2],
    [0, 0, 1, 1, 1, 2],
  ];

  return (
    <Box mt={10} ml={10}>
      <svg
        width="100%"
        className="svg"
        viewBox="0 0 1600 750"
        xmlns="http://www.w3.org/2000/svg"
        pointerEvents="none"
      >
        <BoardPattern />
        {boardTest.map((column, index) => {
          return (
            <BoardColumn key={`column-${index}`} x={index} column={column} />
          );
        })}
      </svg>
    </Box>
  );
};

export default Board;
