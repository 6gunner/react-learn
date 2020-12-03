import React from "react";

function logProps(Component) {
  class LogPropsComponent extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props", prevProps);
      console.log("new props", this.props);
    }
    render() {
      // forwardedRef是通过React.forwardRef传过来的
      const { abc, ...rest } = this.props;
      return <Component ref={abc} {...rest}></Component>;
    }
  }
  return React.forwardRef((props, ref) => {
    return <LogPropsComponent {...props} abc={ref}></LogPropsComponent>;
  });
}

class FancyButton extends React.Component {
  focus() {
    console.log("focus");
  }
  render() {
    return (
      <button
        className="FancyButton"
        onClick={() => {
          console.log("我被点击了");
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

const LoggedFancyButton = logProps(FancyButton);

function Main() {
  const ref = React.createRef();
  React.useEffect(() => {
    ref.current && ref.current.focus();
  }, [ref]);
  return <LoggedFancyButton ref={ref}>Logged Forward Button</LoggedFancyButton>;
}

export default Main;
