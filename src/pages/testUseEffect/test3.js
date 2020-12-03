import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
function Test3() {
  const [count, setCount] = useState(0);
  var a = useRef("xxx");
  useEffect(() => {
    console.log(a, "useEffect");
    document.title = `You clicked ${count} times`;
    return () => {
      console.log(a, "end useEffect");
      document.title = `remove`;
    };
  });
  useLayoutEffect(() => {
    console.log(a, "useLayoutEffect");
    document.title = `You clicked ${count} times`;
    return () => {
      console.log(a, "end useLayoutEffect");
      document.title += "!!!";
    };
  });
  console.log(count, "更新Example");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Child></Child>
    </div>
  );
}

class Child extends React.Component {
  componentDidMount() {
    console.log("Child mount");
  }
  componentDidUpdate() {
    console.log("Child update");
  }
  render() {
    return <span>Child</span>;
  }
}
export default Test3;
