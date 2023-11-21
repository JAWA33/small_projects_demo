import React from "react";
import { Presentation } from "../../components/Presentation/Presentation";
import { TicTacToeApp } from "../../components/TicTacToeApp/TicTacToeApp";
import { BackButton } from "../../components/BackButton/BackButton";

export const TicTacToe = () => {
  return (
    <div className="container">
      <Presentation
        title="Do you want to"
        titleColor="Play a Game"
        titleItalic="with me ?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet commodi nostrum nobis corporis quia sed, dicta nesciunt natus"
      >
        <BackButton />
      </Presentation>
      <TicTacToeApp />
    </div>
  );
};
