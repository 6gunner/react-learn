import React, { useEffect, useState } from "react";

function TestUseStatePage() {
  console.log("重新渲染...");
  const [count1, setCount1] = useState(() => 0);
  const [count2, setCount2] = useState(() => 0);

  // react18的自动批处理不仅针对event handler，对于promise，xhr的callback也同样有效；
  useEffect(() => {
    setTimeout(() => {
      setCount1(1);
      setCount2(2);
    }, 1);
  }, []);

  // react做了优化，在同一个event handler里，多次调用setState，
  // 会被自动批处理。减少重新渲染
  const handleClick = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  };
  return (
    <div>
      <div>{count1}</div>
      <div>{count2}</div>
      <button onClick={handleClick}>add</button>
    </div>
  );
}

class TestUseStateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
    };
  }

  handleClick() {
    this.setState({
      count1: 1,
    });
    this.setState({
      count2: 2,
    });
  }

  render(): React.ReactNode {
    console.log("重新渲染...");

    return (
      <div>
        <div>{this.state.count1}</div>
        <div>{this.state.count2}</div>
        <button onClick={this.handleClick.bind(this)}>add</button>
      </div>
    );
  }
}

export const Component = TestUseStatePage;
