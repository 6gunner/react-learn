// demo5 测试useLatest的自定义hook，主要是解决闭包的问题
// 用于确保你在异步函数中总是访问到最新的 prop 或 state。
import React, { useState, useEffect } from "react";
import { useLatest } from "./useLatest";

function Demo5() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(count2 + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(defult): {count2}</p>
    </>
  );
}

export const Component = Demo5;
