import React from "react";

const FancyInput = React.forwardRef((props, ref) => {
  const innerRef = React.useRef();
  React.useImperativeHandle(ref, () => {
    return {
      value: innerRef.current.value,
      focus: () => innerRef.current.focus(),
    };
  });
  return <input ref={innerRef} type="text" />;
});

function Main() {
  const ref = React.createRef();
  React.useEffect(() => {
    console.log(ref);
    ref.current.focus();
  }, [ref]);
  return <FancyInput ref={ref} />;
}

export default Main;
