import React, { useState } from "react";

function TestUseState() {
  let [number, setNumber] = useState(0);

  function alertNumber() {
    setTimeout(() => {
      alert(number);
    }, 3000);
  }

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={alertNumber}>alert number</button>
    </>
  );
}

export default TestUseState;
