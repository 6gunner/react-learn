import { useSyncExternalStore } from "react";

import { todoStore } from "./todoStore";
import { ChatIndicator } from "./ChatIndicator";

function TestUseSyncExternalStorePage() {
  // useSyncExternalStore最适合用来同步一些react app外部的状态。
  // 比如一些browser的api暴露的event或者数据;
  // 又或者是一些第三方的data
  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot
  );

  return (
    <div>
      <button onClick={() => todoStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <ChatIndicator />
    </div>
  );
}

export const Component = TestUseSyncExternalStorePage;
