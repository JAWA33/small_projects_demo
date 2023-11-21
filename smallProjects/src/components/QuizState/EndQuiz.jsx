import React, { useContext } from "react";
import { ContextQuizz } from "../../helpers/ContextQuizz";
import { Questions } from "../../helpers/QuestionsBank";
import styles from "./quiz.module.css";
import { Button, Flex } from "@radix-ui/themes";

export const EndQuiz = () => {
  const { score, setScore, setQuizState } = useContext(ContextQuizz);

  const messagesList = [
    ["Everything to learn", "Back to the roots of programming"],
    ["Lots to learn", "A bit more practice needed"],
    ["Room to grow ...", "Keep Learning"],
    ["Not Bad :)", "But you can do better"],
    ["Good effort !", "You secured a solid score"],
    ["Flawless Victory !", "You got a perfect score"],
  ];

  const playAgain = () => {
    setScore(0);
    setQuizState("startQuiz");
  };

  return (
    <Flex direction="column" gap="9">
      <div className={styles.endQuizResult}>
        <h2 className={styles.endMessage}>{messagesList[score][0]}</h2>
        <p className={styles.endScore}>
          {score} / {Questions.length}
        </p>
        <p className={styles.subMessage}>{messagesList[score][1]}</p>
      </div>
      <Button
        size="3"
        color="cyan"
        variant="classic"
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => playAgain()}
      >
        Do it again
      </Button>
    </Flex>
  );
};
