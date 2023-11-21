import React, { useState } from "react";
import styles from "./ticTacToeApp.module.css";
import { BoardSquare } from "./BoardSquare";
import { TicTacToePatterns } from "../../helpers/TicTacToePatterns";
import { useEffect } from "react";

export const TicTacToeApp = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [whoIsTheWinner, setWhoIsTheWinner] = useState({
    winner: "none",
    state: "stillInGame",
  });

  const selectThisSquare = (squareIndex) => {
    setBoard(
      board.map((val, index) => {
        if (index === squareIndex && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const checkIfSomebodyWin = () => {
    TicTacToePatterns.forEach((currentPattern) => {
      const playerCheckElement = board[currentPattern[0]]; //get each element corresponding in pattern line
      if (playerCheckElement === "") return; //if one of the element is empty this line can't win so go to next line
      let foundWinner = true;
      currentPattern.forEach((index) => {
        //if one element as a different player there's no winner
        if (board[index] !== playerCheckElement) {
          foundWinner = false;
        }
      });
      //if a winner is found, change the game state and write the winner
      if (foundWinner) {
        setWhoIsTheWinner({
          winner: player,
          state: "endGame",
        });
      }
    });
  };

  useEffect(() => {
    checkIfSomebodyWin();
    if (player == "X") {
      setPlayer("0");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (whoIsTheWinner.state !== "stillInGame") {
      alert("Game finished : The winner is " + whoIsTheWinner.winner);
    }
  }, [whoIsTheWinner]);

  return (
    <div className={styles.gameBoard}>
      <div className={styles.boardRows}>
        <BoardSquare
          val={board[0]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(0);
            }
          }}
        />
        <BoardSquare
          val={board[1]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(1);
            }
          }}
        />
        <BoardSquare
          val={board[2]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(2);
            }
          }}
        />
      </div>
      <div className={styles.boardRows}>
        <BoardSquare
          val={board[3]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(3);
            }
          }}
        />
        <BoardSquare
          val={board[4]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(4);
            }
          }}
        />
        <BoardSquare
          val={board[5]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(5);
            }
          }}
        />
      </div>
      <div className={styles.boardRows}>
        <BoardSquare
          val={board[6]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(6);
            }
          }}
        />
        <BoardSquare
          val={board[7]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(7);
            }
          }}
        />
        <BoardSquare
          val={board[8]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "stillInGame") {
              selectThisSquare(8);
            }
          }}
        />
      </div>
    </div>
  );
};
