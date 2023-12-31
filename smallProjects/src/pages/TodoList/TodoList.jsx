import React from "react";
import { Presentation } from "../../components/Presentation/Presentation";
import { BackButton } from "../../components/BackButton/BackButton";
import TodoListApp from "../../components/TodoListApp/TodoListApp";
export const TodoList = () => {
  return (
    <div className="container container--onTop">
      <Presentation
        title="Manage"
        titleColor="Your Tasks"
        titleItalic="with this To-Do List"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore voluptas aliquam iure ut possimus! Debitis natus totam iusto dolores quis, repellat quia"
      >
        <BackButton />
      </Presentation>
      <TodoListApp />
    </div>
  );
};
