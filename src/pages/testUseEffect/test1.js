import React, { useEffect, useLayoutEffect } from "react";

function Test1() {
  useEffect(() => {
    console.log("useEffect...");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect...");
  }, []);

  return <div>useEffect vs useLayoutEffect的执行顺序</div>;
}

export default Test1;
