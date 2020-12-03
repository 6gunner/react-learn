import React, { useRef, useEffect, useLayoutEffect } from "react";
import "./test2.style.css";
// 无效，没看出区别
function Test2() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    let i = 0;
    let intervalId = setInterval(() => {
      i++;
      ref1.current.style.left = `${i}px`;
      if (i > 1000) {
        clearInterval(intervalId);
      }
    }, 1);
  }, []);

  useLayoutEffect(() => {
    let i = 0;
    let intervalId = setInterval(() => {
      i++;
      ref2.current.style.left = `${i}px`;
      if (i > 1000) {
        clearInterval(intervalId);
      }
    }, 1);
  }, []);

  return (
    <div>
      <div className="animate">
        <div ref={ref1} className="square">
          square
        </div>
      </div>
      <div className="animate">
        <div ref={ref2} className="square">
          square
        </div>
      </div>
    </div>
  );
}

export default Test2;
