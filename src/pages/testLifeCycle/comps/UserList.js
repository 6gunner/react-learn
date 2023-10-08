import React, { Component } from "react";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("userList getDerivedStateFromProps");

  //   if (nextProps.data !== prevState.data) {
  //     return {
  //       data: nextProps.data,
  //     };
  //   }
  // }

  render() {
    console.log("userList render");
    return (
      <ul>
        {this.props.data.map((item) => (
          <li key={item.get("id")}>
            {item.get("id") +
              ". " +
              item.get("first_name") +
              " " +
              item.get("last_name")}
          </li>
        ))}
      </ul>
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // 如果parent重新渲染了，这里肯定要被调用；
    console.log("userList UNSAFE_componentWillReceiveProps");
    debugger;
    if (this.props.data !== nextProps.data) {
      this.setState({
        data: nextProps.data,
      });
    }
  }
}

export default UserList;
