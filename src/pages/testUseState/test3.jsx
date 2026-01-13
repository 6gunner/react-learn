import React, { useEffect, useRef, useState } from "react";

/**
 * 理解一下这个ref有啥魔力？
 * useEffect的执行时机是在重新渲染之后，是异步执行的;
 * 
 * ref.current变化不会引起重新渲染
 * 
 * @returns
 */
function TestUseState3() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    console.log("mount???")
  }, [])

  // count变化引起prevCountRef.current变化
  useEffect(() => {
    console.log("useEffect count触发了"); // 在页面重新渲染后才触发;
    prevCountRef.current = count;
    setCount(count);
  }, [count]);
  console.log("count=???", count)
  console.log("prevCountRef.current=???", prevCountRef.current)
  console.log("prevCountRef.current===count???", prevCountRef.current == count)// 返回false，因为这时候useEffect里的函数还没执行


  const handleIncrement = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000)
  };
  console.log("重新渲染??")

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current !== undefined ? prevCountRef.current : 'N/A'}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
}


export default TestUseState3;
