import React, { useState, useEffect } from "react";
import {
  unstable_scheduleCallback as scheduleCallback,
  unstable_NormalPriority as NormalPriority,
  unstable_LowPriority as LowPriority,
} from "scheduler";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    scheduleCallback(LowPriority, () => {
      // 模拟一个低优先级任务
      console.log("Low Priority Task Executed");
    });
    scheduleCallback(NormalPriority, () => {
      // 模拟一个高优先级任务
      console.log("High Priority Task Executed");
    });
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export const Component = App;
