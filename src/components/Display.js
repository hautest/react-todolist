import React, { useState } from "react";

function Display({ todoArray, onClickXButton, settodoArray }) {
  const onclickSpanLine = (event) => {
    if (event.target.className === "lineOff") {
      settodoArray((prev) => {
        const newArr = prev.map((array) =>
          String(array.id) === event.target.id
            ? { ...array, className: "lineOn" }
            : array
        );
        console.log(newArr);
        localStorage.setItem("todo", JSON.stringify(newArr));
        return newArr;
      });
    } else if (event.target.className === "lineOn") {
      settodoArray((prev) => {
        const newArr = prev.map((array) =>
          String(array.id) === event.target.id
            ? { ...array, className: "lineOff" }
            : array
        );
        console.log(newArr);
        localStorage.setItem("todo", JSON.stringify(newArr));
        return newArr;
      });
    }
  };

  return todoArray.map((array) => (
    <li key={array.id} id={array.id}>
      <span onClick={onclickSpanLine} id={array.id} className={array.className}>
        {array.text}
      </span>
      <button id={array.id} onClick={onClickXButton} className="listXButton">
        X
      </button>
    </li>
  ));
}
export { Display };
