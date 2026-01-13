import React, { Component } from "react";
import UserList from "./comps/UserList";
import { fromJS, Map, List, is } from "immutable";

const userList = fromJS([
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
]);

const userList2 = fromJS([
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
]);
class TestLifeCyclePage extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      users: userList,
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("getDerivedStateFromProps");
  //   return {
  //     users: prevState.users,
  //   };
  // }

  async UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount");
    this.state = {
      users: userList2,
    };
    // // do a long task
    // await helper.delay(5000);
    // this.setState({
    //   users: userList,
    // });
  }

  handleClick() {
    this.setState({
      users: userList.concat(userList2),
    });
  }

  handleClickReset() {
    // state数据虽然没变，但是其实内存地址变了，因此会触发重新渲染
    this.setState({
      users: userList,
    });
    // 改用immutable后就没问题了
  }

  handleReRender() {
    this.forceUpdate();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (is(this.state.users, nextState.users)) {
      return false;
    }
    return true;
  }

  render() {
    console.log("render");

    return (
      <div>
        <UserList data={this.state.users}></UserList>

        <button onClick={this.handleClick.bind(this)}>拼接data</button>
        <button onClick={this.handleClickReset.bind(this)}>reset data</button>
        <button onClick={this.handleReRender.bind(this)}>re-render</button>
      </div>
    );
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("UNSAFE_componentWillReceiveProps");
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("UNSAFE_componentWillUpdate");
    //  triggerEvent();
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("#enter getSnapshotBeforeUpdate");
    return "foo";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("#enter componentDidUpdate snapshot = ", snapshot);
  }
}

export default TestLifeCyclePage;
