import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import { ThemeContext, UserContext } from "./context-manager";
import { useReducer } from "react";

function TestUseContext() {
  return (
    <div>
      <Switch>
        <Route path="/useContext/1">
          <Child1 />
        </Route>
        <Route path="/useContext/2">
          <Parent2 />
        </Route>
      </Switch>
    </div>
  );
}

function Child1() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1 style={theme}> 我是child，我被useContext样式控制了</h1>
      <button onClick={() => changeTheme()}>改变主题</button>
    </div>
  );
}

function Parent2() {
  const [userState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "stepInc":
          return {
            ...state,
            step: state.step + 1,
          };
        case "numberInc":
          return {
            ...state,
            number: state.number + 1,
          };
        case "count":
          return {
            ...state,
            count: state.step + state.number,
          };
        default:
          break;
      }
    },
    { step: 0, number: 0, count: 0 }
  );
  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      <Child2 />
    </UserContext.Provider>
  );
}

let Child2 = () => {
  const { userState, dispatch } = useContext(UserContext);
  return React.useMemo(
    () => (
      <div>
        {console.log("[Child] RE-RENDER")}
        <p>step is : {userState.step}</p>
        <p>number is : {userState.number}</p>
        <p>count is : {userState.count}</p>
        <hr />
        <div>
          <button
            onClick={() => {
              dispatch({ type: "stepInc" });
            }}
          >
            step ++
          </button>
          <button
            onClick={() => {
              dispatch({ type: "numberInc" });
            }}
          >
            number ++
          </button>
          <button
            onClick={() => {
              dispatch({ type: "count" });
            }}
          >
            number + step
          </button>
        </div>
      </div>
    ),
    [dispatch, userState.count, userState.number, userState.step]
  );
};

// let MemoedChild2 = React.memo(Child2);

export default TestUseContext;
