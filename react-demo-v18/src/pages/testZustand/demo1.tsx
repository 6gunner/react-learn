import React from "react";
import { useStore } from "./store";

function Demo1() {
  const { bears, increasePopulation, updateBears, removeAllBears } = useStore(
    (state) => state
  );
  return (
    <div>
      <div>bears count: {bears}</div>
      <button onClick={increasePopulation}>increase </button>
      <button onClick={removeAllBears}>remove </button>
      <button
        onClick={() => {
          updateBears(bears + 10);
        }}
      >
        add 10
      </button>
    </div>
  );
}

export const Component = Demo1;
