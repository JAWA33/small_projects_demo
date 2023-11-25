import React, { useEffect, useState } from "react";
import styles from "./ticTacToeApp.module.css";

export const BoardSquare = ({
  colorId,
  val,
  squareIndex,
  selectThisSquare,
}) => {
  return (
    <div
      className={styles.square}
      onClick={() => selectThisSquare(squareIndex)}
    >
      <span id={colorId === "blue" ? styles.blue : styles.red}>{val}</span>
    </div>
  );
};
