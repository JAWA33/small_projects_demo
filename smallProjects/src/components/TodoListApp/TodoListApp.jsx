import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Flex, Text, TextField } from "@radix-ui/themes";
import { TaskDetail } from "./TaskDetail/TaskDetail";

const TodoListApp = () => {
  const newTaskValue = useRef();
  const savedData = JSON.parse(localStorage.getItem("todoData")) || [];
  console.log(savedData);
  const [arrayOfTasks, setArrayOfTasks] = useState(savedData);

  const addToTask = () => {
    const newArray = new Array(...arrayOfTasks);
    if (newTaskValue.current.value !== "") {
      const saveTime = new Date().getHours() + " : " + new Date().getMinutes();
      newArray.unshift([
        "id" + new Date().getTime(),
        saveTime,
        newTaskValue.current.value,
        "uncheck",
      ]);

      setArrayOfTasks(newArray);
      newTaskValue.current.value = "";
    }
  };

  const toggleStatus = (id) => {
    const actualTasksArray = new Array(...arrayOfTasks);
    const noChangeTasksArray = actualTasksArray.filter(
      (task) => task[0] !== id
    );
    const taskToToggle = actualTasksArray.filter((task) => task[0] === id);
    const valueToToggle = taskToToggle[0][3] === "check" ? "uncheck" : "check";
    const toggledTask = [
      taskToToggle[0][0],
      taskToToggle[0][1],
      taskToToggle[0][2],
      valueToToggle,
    ];
    if (taskToToggle[0][3] === "check") {
      noChangeTasksArray.unshift(toggledTask);
    } else {
      noChangeTasksArray.push(toggledTask);
    }

    setArrayOfTasks(noChangeTasksArray);
  };

  const deleteTask = (id) => {
    const actualTasksArray = new Array(...arrayOfTasks);
    const newTasksArray = actualTasksArray.filter((task) => task[0] !== id);
    setArrayOfTasks(newTasksArray);
  };

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(arrayOfTasks));
  }, [arrayOfTasks]);

  return (
    <Flex direction="column" justify="between" align="start" gap="5">
      <Text as="h2">Add new task to your todo list</Text>
      <TextField.Input
        variant="surface"
        size="3"
        placeholder="What is your task ?"
        ref={newTaskValue}
        id="inputTask"
        style={{ width: "450px" }}
      />
      <Button
        onClick={addToTask}
        variant="classic"
        color="cyan"
        style={{ cursor: "pointer" }}
      >
        Add task
      </Button>
      <Container size="3" grow="1">
        {arrayOfTasks?.map((task, index) => (
          <TaskDetail
            key={index}
            id={task[0]}
            action={task[2]}
            time={task[1]}
            status={task[3]}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
          />
        ))}
      </Container>
    </Flex>
  );
};

export default TodoListApp;
