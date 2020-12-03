import React from "react";
import useDocumentVisibility from "../../hooks/useDocumentVisibility";

function Hey() {
  let documentVisibility = useDocumentVisibility();
  return (
    <div>
      <h1>Test Use Custom Hook</h1>
      {documentVisibility === "visible" ? <h2>hi</h2> : null}
    </div>
  );
}

export default Hey;
