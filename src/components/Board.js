import React, { useState, useEffect } from "react";
import classes from "../styles/board.module.css";
import { createArray, isArraySorted } from "../utils/helper";
import Cell from "./Cell";

const Board = () => {
  const [Array, setArray] = useState([]);
  const [win, setWin] = useState(false);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    setArray(createArray());
  }, []);

  const swap = (currentIndex, empty) => {
    let temp = [...Array];
    temp[empty] = Array[currentIndex];
    temp[currentIndex] = 16;
    setArray(temp);
    setClicks(clicks + 1);
    if (isArraySorted(temp)) {
      setWin(true);
    }
  };

  const onTileClick = (value) => {
    let empty = Array.indexOf(16);
    let currentIndex = Array.indexOf(value);

    if (currentIndex + 4 === empty || currentIndex - 4 === empty) {
      swap(currentIndex, empty);
    } else if (currentIndex + 1 === empty && empty % 4 !== 0) {
      swap(currentIndex, empty);
    } else if (currentIndex - 1 === empty && (empty + 1) % 4 !== 0) {
      swap(currentIndex, empty);
    }
  };

  const reset = () => {
    setArray(createArray());
    setClicks(0);
    setWin(false);
  };

  return (
    <div>
      <div className={classes.win}>{!!win && <h1>YOU WIN !!</h1>}</div>

      <div className={classes.grid}>
        {Array.map((e) => {
          return <Cell value={e} onTileclick={onTileClick} />;
        })}
      </div>

      <div className={classes.footer}>
        <button className={classes.button} onClick={reset}>
          {" "}
          Reset
        </button>
        <div className={classes.click}>
          {" "}
          <h1>Count: {clicks}</h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Board;
