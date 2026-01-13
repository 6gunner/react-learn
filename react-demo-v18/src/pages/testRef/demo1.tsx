import React, { useState, useRef, useCallback } from "react";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

type ObjType = {
  c: number;
};
const App = () => {
  const [obj, setObj] = useState<ObjType>({ c: 0 });
  const ref = useRef<ObjType>();
  ref.current = obj; // 每次更新objState时，都会将ref.current设置成最新的

  const asyncClick = useCallback(async () => {
    await sleep(1000);
    console.log("ref", ref.current?.c);
    console.log("obj", obj.c);
    console.log("ref.current == obj", ref.current == obj);
    // 因此这里循环的时候，ref.current会变
    while (ref.current == obj) {
      await sleep(1000);
      console.log("ref", ref.current.c);
      console.log("obj", obj.c);
      console.log("ref.current == obj", ref.current == obj);
    }
    return ref.current;
  }, [obj, ref]);

  const click = () => {
    // setObj((p) => ({ c: p.c + 1 }));
    setObj({ c: obj.c + 1 });
  };

  return (
    <>
      <button onClick={asyncClick}>async</button>
      <button onClick={click}>sync</button>
      <span>{obj.c}</span>
    </>
  );
};

export default App;
