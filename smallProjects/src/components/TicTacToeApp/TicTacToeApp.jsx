import React, { useState } from "react";
import styles from "./ticTacToeApp.module.css";
import { BoardSquare } from "./BoardSquare";
import { TicTacToePatterns } from "../../helpers/TicTacToePatterns";
import { useEffect } from "react";
import { Button } from "@radix-ui/themes";

export const TicTacToeApp = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [whoIsTheWinner, setWhoIsTheWinner] = useState({
    winner: "none",
    state: "gameStarted",
  });

  const selectThisSquare = (squareIndex) => {
    console.log("Selected Square");
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
    console.log("CheckIfSomebodyWin and change Player");
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
        console.log("There is a winner");
        setWhoIsTheWinner({
          winner: player,
          state: "endGame",
        });
      }
    });
  };

  const checkIfGameIsOver = () => {
    //console.log("CheckIfGameOver");
    let nobodyWins = true;
    board.forEach((indexSquare) => {
      if (indexSquare === "") {
        nobodyWins = false;
        return;
      }
    });
    if (nobodyWins) {
      setWhoIsTheWinner({
        winner: "none",
        state: "nobodyWins",
      });
    }
  };

  const playAgain = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setWhoIsTheWinner({
      winner: "none",
      state: "gameStarted",
    });
    setPlayer("O");
  };

  const togglePlayer = () => {
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };

  //? Control after each move and change player:
  useEffect(() => {
    checkIfGameIsOver();
    checkIfSomebodyWin();
    togglePlayer();
  }, [board]);

  return (
    <div className={styles.gameBoard}>
      <div className={styles.boardRows}>
        <BoardSquare
          colorId={board[0] === "X" ? "blue" : "red"}
          val={board[0]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(0);
            }
          }}
        />
        <BoardSquare
          colorId={board[1] === "X" ? "blue" : "red"}
          val={board[1]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(1);
            }
          }}
        />
        <BoardSquare
          colorId={board[2] === "X" ? "blue" : "red"}
          val={board[2]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(2);
            }
          }}
        />
      </div>
      <div className={styles.boardRows}>
        <BoardSquare
          colorId={board[3] === "X" ? "blue" : "red"}
          val={board[3]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(3);
            }
          }}
        />
        <BoardSquare
          colorId={board[4] === "X" ? "blue" : "red"}
          val={board[4]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(4);
            }
          }}
        />
        <BoardSquare
          colorId={board[5] === "X" ? "blue" : "red"}
          val={board[5]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(5);
            }
          }}
        />
      </div>
      <div className={styles.boardRows}>
        <BoardSquare
          colorId={board[6] === "X" ? "blue" : "red"}
          val={board[6]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(6);
            }
          }}
        />
        <BoardSquare
          colorId={board[7] === "X" ? "blue" : "red"}
          val={board[7]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(7);
            }
          }}
        />
        <BoardSquare
          colorId={board[8] === "X" ? "blue" : "red"}
          val={board[8]}
          selectThisSquare={() => {
            if (whoIsTheWinner.state === "gameStarted") {
              selectThisSquare(8);
            }
          }}
        />
      </div>
      {whoIsTheWinner.state === "endGame" && (
        <div className={styles.popup}>
          <p>Player {whoIsTheWinner.winner} wins</p>
          <Button
            size="3"
            color="cyan"
            variant="classic"
            style={{ cursor: "pointer" }}
            onClick={() => playAgain()}
          >
            Play Again
          </Button>
        </div>
      )}
      {whoIsTheWinner.state === "nobodyWins" && (
        <div className={styles.popup}>
          <p>Draw match</p>
          <Button
            size="3"
            color="cyan"
            variant="classic"
            style={{ cursor: "pointer" }}
            onClick={() => playAgain()}
          >
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};
