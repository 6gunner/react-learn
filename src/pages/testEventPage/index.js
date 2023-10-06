import React, { useEffect, useRef } from "react";

function Page() {
  const ele = useRef(null);
  useEffect(() => {
    ele.current.addEventListener("click", (event) => {
      //DOM 方式
      console.log("dom event inside", event);
    });
  });
  const handleClick = (event) => {
    //React 事件委托方式
    console.log("react event inside", event);
  };
  const handleClick2 = () => {
    console.log("App");
  };
  return (
    <div className="App" onClick={handleClick2}>
      <button onClick={handleClick}>normal react event bind</button>
      <button ref={ele}>ref dom event bind</button>
    </div>
  );
}

document.getElementById("root").addEventListener("click", (event) => {
  console.log("root====>", event);
});

export default Page;
