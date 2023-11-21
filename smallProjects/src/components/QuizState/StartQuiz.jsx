import React, { useContext, useState } from "react";
import { Questions } from "../../helpers/QuestionsBank";
import { Button, Flex, Text } from "@radix-ui/themes";
import { ContextQuizz } from "../../helpers/ContextQuizz";
import styles from "./quiz.module.css";

export const StartQuiz = () => {
  const { setQuizState, setScore } = useContext(ContextQuizz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const answerToQuestion = (resp) => {
    setUserAnswer(resp);
    if (resp === Questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    } else {
      setQuizState("endQuiz");
    }
  };

  return (
    <div className={styles.startQuiz}>
      <Text as="h2">{Questions[currentQuestion].prompt}</Text>
      <Button
        size="3"
        color="cyan"
        variant="classic"
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => answerToQuestion("A")}
      >
        {Questions[currentQuestion].optionA}
      </Button>
      <Button
        size="3"
        color="cyan"
        variant="classic"
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => answerToQuestion("B")}
      >
        {Questions[currentQuestion].optionB}
      </Button>
      <Button
        size="3"
        color="cyan"
        variant="classic"
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => answerToQuestion("C")}
      >
        {Questions[currentQuestion].optionC}
      </Button>
      <Button
        size="3"
        color="cyan"
        variant="classic"
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => answerToQuestion("D")}
      >
        {Questions[currentQuestion].optionD}
      </Button>
    </div>
  );
};
