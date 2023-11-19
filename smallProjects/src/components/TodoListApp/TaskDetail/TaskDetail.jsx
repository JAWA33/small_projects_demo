import { Box, Card, Flex, Text, Button, Avatar } from "@radix-ui/themes";
import React from "react";
import styles from "./taskDetail.module.css";

export const TaskDetail = ({
  id,
  action,
  time,
  status,
  toggleStatus,
  deleteTask,
}) => {
  const IconLetter = action ? action.slice(0, 1) : "x";

  const ArrayOfColor = [
    "tomato",
    "ruby",
    "pink",
    "purple",
    "iris",
    "jade",
    "orange",
    "cyan",
    "yellow",
    "olive",
  ];
  const colorThemeForIconLetter = () => {
    let colorChoice = 0;
    console.log(id);
    if (id) {
      colorChoice = id.charAt(id.length - 1);
    }
    return ArrayOfColor[colorChoice];
  };

  return (
    <Card
      variant="classic"
      id={id}
      draggable
      style={
        ({ cursor: "move" },
        { backgroundColor: status === "check" ? "#67e8f9" : "" })
      }
    >
      <Flex gap="5" align="center" justify="between">
        <Flex gap="5" align="center">
          <Avatar
            variant="solid"
            size="3"
            radius="full"
            fallback={IconLetter}
            color={colorThemeForIconLetter()}
          />
          <Box>
            <Text as="div" size="3" weight="bold" color="mauve">
              {action}
            </Text>
          </Box>
        </Flex>
        <Flex gap="9" align="center">
          <Button
            color={status === "check" ? "blue" : "red"}
            variant={status === "check" ? "classic" : "soft"}
            onClick={() => toggleStatus(id)}
          >
            {status === "check" ? "Do it again" : "Finish task"}
          </Button>
          <Button color="red" variant="classic" onClick={() => deleteTask(id)}>
            Delete Task
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
