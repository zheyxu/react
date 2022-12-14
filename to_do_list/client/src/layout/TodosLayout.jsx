import React from "react";
import { TodoCard } from "../components/TodoCard";

export function TodosLayout({ todos, completeTodo, deleteTodo }) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
