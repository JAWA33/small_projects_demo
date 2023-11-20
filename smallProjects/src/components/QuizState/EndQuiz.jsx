import React, { useContext } from "react";
import { ContextQuizz } from "../../helpers/ContextQuizz";

export const EndQuiz = () => {
  const { score } = useContext(ContextQuizz);
  return <div>Your score is : {score}</div>;
};
