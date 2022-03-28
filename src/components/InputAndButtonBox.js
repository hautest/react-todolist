import React, { memo, useEffect, useState } from "react";
import { Display } from "./Display";

function InputAndButtonBox() {
  const [inputValue, setinputValue] = useState("");
  const [todoArray, settodoArray] = useState(
    JSON.parse(localStorage.getItem("todo")) ?? []
  );

  function FunsetinputValue(event) {
    event.preventDefault();
    setinputValue(event.target.value);
  }

  function buttonOnsubmit(event) {
    event.preventDefault();

    if (inputValue === "") {
      alert("입력해주십시오");
    } else {
      console.log(inputValue);

      settodoArray((prev) => {
        const newArr = [
          ...prev,
          {
            text: inputValue,
            id: parseInt(Math.random() * 100000 + 1),
            className: "lineOff",
          },
        ];
        console.log(newArr);
        localStorage.setItem("todo", JSON.stringify(newArr));
        return newArr;
      });

      setinputValue("");
    }
  }

  const onClickXButton = (event) => {
    console.log(event.target.id);
    settodoArray((prev) => {
      const newArr = prev.filter(
        (array) => String(array.id) !== event.target.id
      );
      localStorage.setItem("todo", JSON.stringify(newArr));
      return newArr;
    });

    console.log(todoArray);
  };

  return (
    <>
      <form onSubmit={buttonOnsubmit}>
        <input value={inputValue} onChange={FunsetinputValue}></input>
        <button className="inputButton">입력</button>
      </form>
      <br></br>
      <ul className="listContentBox">
        <br></br>
        <Display
          todoArray={todoArray}
          onClickXButton={onClickXButton}
          settodoArray={settodoArray}
        />
        <br></br>
      </ul>
    </>
  );
}

export default InputAndButtonBox;
