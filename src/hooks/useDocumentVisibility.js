import React, { useState, useEffect } from "react";

function useDocumentVisibility() {
  const [documentVisibility, setDocumentVisibility] = useState(
    document.visibilityState
  );

  function handleVisibilityChange() {
    setDocumentVisibility(document.visibilityState);
  }

  useEffect(() => {
    window.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return documentVisibility;
}

export default useDocumentVisibility;
