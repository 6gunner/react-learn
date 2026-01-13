import { useEffect, useState } from "react";
import { useMyTestFn } from "./useMyTestFn";

/**
 * 我理解自定义hook返回的对象，需要用memo wrap一下，否则testFn每次都会变
   但实际上testFn并没有触发，所以是不是可以理解useMyTestFn返回的testFn没有变
 * @returns 
 */

function TestCustomHookPage() {
  const { isLockLoading, method, testFn } = useMyTestFn();
  const [name, setName] = useState("");

  useEffect(() => {
    testFn(name);
  }, [name, testFn]);

  return (
    <div>
      <div>打开f12, 查看自定义hook里的memo的作用；</div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {isLockLoading ? "loading" : "not loading"}
      <button onClick={method}>测试</button>
    </div>
  );
}

export const Component = TestCustomHookPage;
