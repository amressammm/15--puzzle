import React from "react";
import classes from "../styles/cell.module.css";

const Cell = (props) => {
  return (
    <div
      className={props.value !== 16 ? classes.tile : classes.empty}
      onClick={() => props.onTileclick(props.value)}
    >
      {props.value !== 16 && <div>{props.value}</div>}
    </div>
  );
};

export default Cell;
