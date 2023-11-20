import React, { useContext } from "react";
import { ContextQuizz } from "../../helpers/ContextQuizz";
import { Button, Flex, Text } from "@radix-ui/themes";

export const MenuQuiz = () => {
  const { quizState, setQuizState } = useContext(ContextQuizz);
  return (
    <Button
      onClick={() => setQuizState("startQuiz")}
      color="cyan"
      style={{ cursor: "pointer" }}
    >
      Start the game
    </Button>
  );
};
