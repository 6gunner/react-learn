import { createPortal } from "react-dom";

function demo1() {
  return (
    <div>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
      {createPortal(
        <script src="https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js"></script>,
        document.head
      )}
    </div>
  );
}

export const Component = demo1;
