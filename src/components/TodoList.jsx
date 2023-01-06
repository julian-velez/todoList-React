import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos , ToggleTodo}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} ToggleTodo={ToggleTodo} />
      ))}
    </ul>
  );
}
