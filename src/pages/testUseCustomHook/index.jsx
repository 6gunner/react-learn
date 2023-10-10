import React, { useCallback, useState } from "react";
// import useDocumentVisibility from "../../hooks/useDocumentVisibility";
import usePoller from "../../hooks/usePoller";

function Hey() {
  // let documentVisibility = useDocumentVisibility();


  const [value, setValue] = useState();
  const [delay, setDelay] = useState(3000);

  const fn = useCallback(() => {
    console.log("use poller 触发了...")
  }, []);
  usePoller(fn, delay)

  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
  }

  const onClick = () => {
    setDelay(value * 1000)
  }

  return (
    <div>
      <h1>Test Use Custom Hook</h1>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={onClick}>reset</button>

    </div>
  );
}

export default Hey;
