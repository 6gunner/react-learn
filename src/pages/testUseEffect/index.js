import React, { useEffect, useLayoutEffect } from "react";
import { Route, Link } from "react-router-dom";

import Test1 from "./test1.js";
import Test2 from "./test2.js";
import Test3 from "./test3.js";

function Test() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/useEffect/test1">
            useEffect vs useLayoutEffect的执行顺序
          </Link>
        </li>
        <li>
          <Link to="/useEffect/test2">
            useEffect vs useLayoutEffect的阻塞效果
          </Link>
        </li>
      </ul>
      <Route exact path="/useEffect/test1" component={Test1}></Route>
      <Route exact path="/useEffect/test2" component={Test2}></Route>
      <Route exact path="/useEffect/test3" component={Test3}></Route>
    </div>
  );
}

export default Test;
