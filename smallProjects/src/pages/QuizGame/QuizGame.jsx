import React, { useState } from "react";
import { Presentation } from "../../components/Presentation/Presentation";
import { BackButton } from "../../components/BackButton/BackButton";
import { StartQuiz } from "../../components/QuizState/StartQuiz";
import { MenuQuiz } from "../../components/QuizState/MenuQuiz";
import { EndQuiz } from "../../components/QuizState/EndQuiz";
import { ContextQuizz } from "../../helpers/ContextQuizz";
import { Container } from "@radix-ui/themes";

export const QuizGame = () => {
  const [quizState, setQuizState] = useState("menuQuiz");
  const [score, setScore] = useState(0);

  return (
    <div className="container container--onTop">
      <ContextQuizz.Provider
        value={{ quizState, setQuizState, score, setScore }}
      >
        <Presentation
          title="Answer this"
          titleColor="Quiz Game"
          titleItalic="and see the result"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore voluptas aliquam iure ut possimus! Debitis natus totam iusto dolores quis, repellat quia"
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <BackButton />
            {quizState === "menuQuiz" && <MenuQuiz />}
          </div>
        </Presentation>
        {quizState === "startQuiz" && <StartQuiz />}
        {quizState === "endQuiz" && <EndQuiz />}
      </ContextQuizz.Provider>
    </div>
  );
};
