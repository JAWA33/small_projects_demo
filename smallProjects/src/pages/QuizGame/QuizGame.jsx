import React from "react";
import { Presentation } from "../../components/Presentation/Presentation";
import { BackButton } from "../../components/BackButton/BackButton";

export const QuizGame = () => {
  return (
    <div className="container">
      <Presentation
        title="Answer"
        titleColor="Quizz Game"
        titleItalic="and see the result"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore voluptas aliquam iure ut possimus! Debitis natus totam iusto dolores quis, repellat quia"
      >
        <BackButton />
      </Presentation>
    </div>
  );
};
