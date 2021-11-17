import React from "react";
import "./svg.module.css";

const BoardCell = (props) => {
  const handleClick = () => {
    console.log(props.empty ? "cell is empty" : "cell is not empty");
  };

  return (
    <circle
      className={"cell"}
      cx={props.cx}
      cy={props.cy}
      r="45"
      fill={props.color}
      stroke="lightgray"
      strokeWidth={3}
      pointerEvents="all"
      onClick={handleClick}
    />
  );
};

export default BoardCell;
