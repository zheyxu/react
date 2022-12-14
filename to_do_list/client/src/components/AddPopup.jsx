import React from "react";

export function AddPopup(props) {
  const { setPopupActive } = props;
  return (
    <div className="addPopup" onClick={() => setPopupActive(true)}>
      +
    </div>
  );
}
