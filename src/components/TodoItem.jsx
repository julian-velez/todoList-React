import React from "react";

export function TodoItem({ todo, ToggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    ToggleTodo(id);
  }
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleTodoClick}/>

      {task}
    </li>
  );
}
