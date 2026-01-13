import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

function Page() {
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      console.log(event.state);
    });
  }, []);

  const handleGoBack = () => {
    history.goBack();
  };

  const handleForward = () => {
    history.goForward();
  };

  const [n, setN] = useState("");
  const handlePush = () => {
    debugger;
    history.push(`/history/${n}`);
    // const key = "test";
    // const state = "test";
    // window.history.pushState({ state, key }, "title", `/history/${n}`);
  };

  return (
    <div>
      history test
      <Link to="/history/1">Link 1</Link>
      <Link to="/history/2">Link 2</Link>
      <Link to="/history">Index</Link>
      <button onClick={handleGoBack}>go back</button>
      <button onClick={handleForward}>forward</button>
      <div>
        <input type="text" value={n} onChange={(e) => setN(e.target.value)} />
        <button onClick={handlePush}>push</button>
      </div>
      <div>
        content:
        <div>{location.pathname}</div>
      </div>
    </div>
  );
}

export default Page;
