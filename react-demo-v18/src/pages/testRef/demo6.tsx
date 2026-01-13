import React, { useState, useEffect, useCallback } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1); // 闭包陷阱：这里的 count 可能是过期的
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      increment(); // 每次执行时都会使用最初的 increment
    }, 1000);

    return () => clearInterval(interval);
  }, [increment]); // 依赖数组：确保 useEffect 依赖于最新的 increment

  return <div>Count: {count}</div>;
};

export const Component = Counter;
