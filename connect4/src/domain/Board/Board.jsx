import { Box } from '@mui/system'
import React from 'react'
import BoardPattern from '../../components/SVG/pattern.csv.jsx'
import BoardColumn from '../../components/SVG/column.csv.jsx'

const Board = () => {

  const boardTest = [
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2],
    [0, 0, 1, 1, 1, 2],
    [0, 0, 1, 1, 1, 2],
    [0, 0, 1, 1, 1, 2],
    [0, 0, 1, 1, 1, 2],
  ]

  return (
    <Box mt={10} ml={10}>
        <svg width="100%" viewBox="0 0 1500 700" xmlns="http://www.w3.org/2000/svg">
          <BoardPattern />
          {boardTest.map((column, index) => {
            return <BoardColumn key={`column-${index}`} x={index} column={column} />
          })}
        </svg>
    </Box>
  )
}

export default Board
