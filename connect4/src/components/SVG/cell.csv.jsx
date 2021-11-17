import React from 'react'

const BoardCell = (props) => {
    console.log(props)

    const handleClick = () => {

    }
    
    return (
        <circle cx={props.cx} cy={props.cy} r="45" fill={props.color} onClick={() => console.log('test')} />
    )
}

export default BoardCell