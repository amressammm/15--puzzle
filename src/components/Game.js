import React from "react";
import classes from "../styles/game.module.css";
import Board from "./Board";

const Game = () => {
  return (
    <div className={classes.game}>
      <Board />
    </div>
  );
};

export default Game;
