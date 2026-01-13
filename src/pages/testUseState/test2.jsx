import React, { useEffect, useRef, useState } from "react";


function TestUseState2() {
  let [number, setNumber] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setNumber(i => i + 1);
    }, 1000);
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      {/* 如果加了key，key变化了，会触发重新渲染 */}
      {/* <InnerComp number={number}
      // key={number}
      /> */}
    </>
  );
}

function InnerComp(props) {

  const [s, setS] = useState(() => {
    console.log("执行state函数");
    return Math.random();
  });

  const [number, setNumber] = useState(props.number);

  console.log("属性变化了.." + props.number);
  useEffect(() => {
    console.log("重新渲染了....")
    return () => {
      console.log("销毁了....")
    }
  }, []);
  // useEffect(() => {
  //   setNumber(props.number);
  // }, [props.number]);
  return (
    <div>
      <div>
        会变化吗？
      </div>
      {number}
    </div>
  )
}


export default TestUseState2;
