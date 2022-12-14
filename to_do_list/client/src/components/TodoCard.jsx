import React from "react";

export function TodoCard({ completeTodo, deleteTodo, todo }) {
  return (
    <div
      className={"todo " + (todo.complete ? "is-complete" : "")}
      onClick={() => completeTodo(todo._id)}
    >
      <div className="checkbox"></div>
      <div className="text">{todo.text}</div>
      <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>
        x
      </div>
    </div>
  );
}
