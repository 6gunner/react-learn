import React, { useEffect, useState } from "react";

export function TestUseStatePage() {
  console.log("重新渲染...");
  const [count1, setCount1] = useState(() => 0);
  const [count2, setCount2] = useState(() => 0);

  // 这里会触发2次重新渲染
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount1(1);
  //     setCount2(2);
  //   }, 1)
  // }, []);

  // 这里只会有1次渲染，结果是1,1
  useEffect(() => {
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount2(count2 + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // 同一个event handler里，多次调用setState，会被自动批处理。减少重新渲染
  const handleClick = () => {
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  };

  const handleClick2 = () => {
    setCount1(count1);
    setCount2(count2);
  };

  return (
    <div>
      <div>{count1}</div>
      <div>{count2}</div>
      <button onClick={handleClick}>测试点击click触发几次重复渲染</button>
      <button onClick={handleClick2}>test是否重复渲染</button>
    </div>
  );
}

export class TestUseStateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }

  handleClick() {
    const { count1, count2 } = this.state;
    this.setState({
      count1: count1 + 1,
    });
    this.setState({
      count1: count1 + 1,
    });
    this.setState({
      count2: count2 + 1
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count1: 1,
      });
      this.setState({
        count2: 2,
      });
    }, 1)
  }

  render() {
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
