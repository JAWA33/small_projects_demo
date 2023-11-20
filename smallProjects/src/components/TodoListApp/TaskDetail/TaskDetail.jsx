import { Card, Flex, Text, Button, Avatar } from "@radix-ui/themes";
import React from "react";

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
      style={{
        width: "450px",
        backgroundColor: status === "check" ? "#67e8f9" : "",
        cursor: "grabbing",
      }}
    >
      <Flex gap="9" align="center" justify="between">
        <Flex gap="5" align="center">
          <Avatar
            variant="solid"
            size="3"
            radius="full"
            fallback={IconLetter}
            color={colorThemeForIconLetter()}
          />
          <Text as="div" size="3" weight="bold" color="mauve">
            {action}
          </Text>
        </Flex>
        <Flex gap="3" align="center">
          <Button
            color={status === "check" ? "blue" : "red"}
            variant={status === "check" ? "classic" : "soft"}
            onClick={() => toggleStatus(id)}
            style={{ cursor: "pointer" }}
          >
            {status === "check" ? "Do it again" : "Finish"}
          </Button>
          <Button
            color="red"
            variant="classic"
            onClick={() => deleteTask(id)}
            style={{ cursor: "pointer" }}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
