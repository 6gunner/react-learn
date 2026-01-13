
import React, { useState, useRef, useCallback } from "react";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default () => {
  // const obj = { c: 0 };
  const [obj, setObj] = useState({ c: 0 });
  const ref = useRef(obj);

  const asyncClick = useCallback(async () => {
    await sleep(2000);
    console.log("ref", ref.current.c);
    console.log("obj", obj.c);
  }, [obj, ref]);

  const click = () => {
    // ref.current.c++;
    // obj.c++;
    setObj({ c: obj.c + 1 });
  };

  return (
    <>
      <button onClick={asyncClick}>async</button>
      <button onClick={click}>sync</button>
    </>
  );
}
