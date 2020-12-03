import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={() => {console.log('我被点击了')}}>
      {props.children}
    </button>
  ));

function Main() {
  const ref = React.createRef();
  React.useEffect(() => {
    console.log('ref')
    ref.current && ref.current.click();
  }, [ref]);
  return (
    <FancyButton ref={ref}>Forward Button</FancyButton>
  )
}

export default Main