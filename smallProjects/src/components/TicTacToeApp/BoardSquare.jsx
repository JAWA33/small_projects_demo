import React from "react";
import styles from "./ticTacToeApp.module.css";

export const BoardSquare = ({ val, squareIndex, selectThisSquare }) => {
  return (
    <div
      className={styles.square}
      onClick={() => selectThisSquare(squareIndex)}
    >
      <span>{val}</span>
    </div>
  );
};
