import React from "react";
import { useReducer } from "react";

function TestUseReducerPage() {
  const [number, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add1":
        return state + 1;
      case "add2":
        return state + 2;
      default:
        return state;
    }
  }, 1);

  const handleClick = (type) => {
    dispatch({
      type,
    });
  };

  return (
    <div>
      {number}

      <button onClick={(e) => handleClick("add1")}>+1</button>
      <button onClick={(e) => handleClick("add2")}>+2</button>
    </div>
  );
}

export default TestUseReducerPage;
