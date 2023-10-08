import React from "react";

class SetStatePage extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    debugger;
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleSetTimeoutClick = () => {
    setTimeout(() => {
      this.setState({
        count: 1,
      });
      console.log(this.state.count);
      this.setState({
        count: 2,
      });
      console.log(this.state.count);
    }, 500);
  };

  render() {
    console.log("render");
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>增加count</button>
        <button onClick={this.handleSetTimeoutClick}>
          在setTimeout里增加count
        </button>
      </div>
    );
  }
}

export default SetStatePage;
