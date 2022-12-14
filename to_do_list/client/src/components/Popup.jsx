import React from "react";

export function Popup({ setPopupActive, setNewTodo, newTodo, addTodo }) {
  return (
    <div className="popup">
      <div className="closePopup" onClick={() => setPopupActive(false)}>
        X
      </div>
      <div className="content">
        <h3>Add Task</h3>
        <input
          type="text"
          className="add-todo-input"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <div className="button" onClick={addTodo}>
          Create Task
        </div>
      </div>
    </div>
  );
}
