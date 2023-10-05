import React, { useImpreative } from "react";

const FancyButton = React.forwardRef((props, ref) => {
  useImpreative(ref, () => {
    return {
      focus() {
        console.log("I am focused");
      },
    };
  });

  return (
    <button
      ref={ref}
      className="FancyButton"
      onClick={() => {
        console.log("我被点击了");
      }}
    >
      {props.children}
    </button>
  );
});

function Main() {
  const childRef = React.useRef();

  const handleClick = () => {
    // 调用子组件的方法
    childRef.current.childMethod();
  };

  React.useEffect(() => {
    return (
      <div>
        <FancyButton ref={childRef}>Forward Button</FancyButton>;
        <button onClick={handleClick}>调用子组件</button>
      </div>
    );
  });
}

export default Main;
