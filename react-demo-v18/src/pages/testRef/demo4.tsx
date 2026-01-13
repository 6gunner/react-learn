// demo，测试usePrevious的实现
import React, { useState } from "react";
import { usePrevious } from "./usePrevious"; // 假设 usePrevious 存在于此路径

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h1>
        Now: {count}, Before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
