// useRef的使用场景：保留上一次渲染的值。
// 不过useRef并不是设计来做这个事情的。

import React, { useRef, useEffect } from "react";

function MyComponent({ value }) {
  const prevValueRef = useRef(value);

  // 每次组件重新刷新后，会执行这段逻辑。
  // 因此 prevValueRef.current能保留上一次渲染的值
  useEffect(() => {
    prevValueRef.current = value;
  });

  const prevValue = prevValueRef.current;
  return (
    <div>
      Previous: {prevValue}, Current: {value}
    </div>
  );
}
export default MyComponent;
