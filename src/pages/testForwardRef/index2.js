import React, { useState } from "react";

const FancyInput = React.forwardRef((props, ref) => {
  const innerRef = React.useRef();
  React.useImperativeHandle(ref, () => {
    return {
      // value: innerRef.current.value,
      focus: () => innerRef.current.focus(),
    };
  });
  return <input ref={innerRef} type="text" />;
});

function Main() {
  const ref = React.useRef();
  React.useEffect(() => {
    console.log("ref...");
  }, [ref]);
  const [data, setData] = useState(0);
  const handleClick = () => {
    setData((data) => (data = data + 1));
    ref.current.focus();
  };
  return (
    <div>
      <FancyInput ref={ref} />
      <button onClick={handleClick}>输入</button>
      <span>{data}</span>
    </div>
  );
}

export default Main;
