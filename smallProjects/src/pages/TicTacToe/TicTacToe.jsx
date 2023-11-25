import React, { useState } from "react";
import { Presentation } from "../../components/Presentation/Presentation";
import { TicTacToeApp } from "../../components/TicTacToeApp/TicTacToeApp";
import { BackButton } from "../../components/BackButton/BackButton";

export const TicTacToe = () => {
  return (
    <div className="container container--onTop">
      <Presentation
        title="Face your friend and"
        titleColor="Fight for Victory"
        titleItalic="at Tic-Tac-Toe"
        text="Time to engage your tactical prowess ! Step into the world of Tic-Tac-Toe, where each move is a strategic masterpiece. Ready to outsmart your opponent ? Begin the game now and let the battle of wits unfold !"
      >
        <BackButton />
      </Presentation>
      <TicTacToeApp />
    </div>
  );
};
