import React from 'react'
import BoardCell from './cell.csv.jsx'

const BoardColumn = (props) => {
    const computeX = (index) => {
        return 50 + (100 * parseInt(index))
    }

    return (
        <svg x={100 * props.x} y="0">
            {props.column.map((element, index) => {
                switch (element) {
                    case 1:
                        return <BoardCell key={`cell-${props.x}-${index}`} empty={false} cx={50} cy={computeX(index)} color="#1C55DC" />

                    case 2:
                        return <BoardCell key={`cell-${props.x}-${index}`} empty={false} cx={50} cy={computeX(index)} color="#DF2035" />
                
                    default:
                        return <BoardCell key={`cell-${props.x}-${index}`} empty={true} cx={50} cy={computeX(index)} color="white" />
                }
            })}
            <rect width="100" height="600" fill="cadetblue" mask="url(#cell-mask)" />
        </svg>
    );
}

export default BoardColumn