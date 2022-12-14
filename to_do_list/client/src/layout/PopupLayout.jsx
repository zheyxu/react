import React from "react";
import { AddPopup } from "../components/AddPopup";
import { Popup } from "../components/Popup";

export function PopupLayout({popupActive, setPopupActive, setNewTodo, newTodo, addTodo }) {
  return (
    <>
      <AddPopup setPopupActive={setPopupActive} />
      {popupActive ? (
        <Popup
          setPopupActive={setPopupActive}
          setNewTodo={setNewTodo}
          newTodo={newTodo}
          addTodo={addTodo}
        />
      ) : null}
    </>
  );
}
