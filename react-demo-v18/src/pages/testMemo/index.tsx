import React, { useMemo, useState } from "react";

function useTestMemo1(chainIds: string[]) {
  const providersMemoMap = (() => {
    console.log("Computing providersMemoMap 11"); // Log computation
    const map: Record<string | number, string> = {};
    for (const i of chainIds) {
      const provider = `${i}-ddd`;
      map[i] = provider;
    }
    return map;
  })();
  return providersMemoMap;
}

function useTestMemo2(chainIds: string[]) {
  debugger;
  const providersMemoMap = useMemo(() => {
    console.log("Computing providersMemoMap 222"); // Log computation
    const map: Record<string | number, string> = {};
    for (const i of chainIds) {
      const provider = `${i}-ddd`;
      map[i] = provider;
    }
    return map;
  }, [chainIds]);
  return providersMemoMap;
}

const a = ["tttt"];
function MemoPageTest() {
  const [count, setCount] = useState<number>(1);
  const map11 = useTestMemo1(a);
  // const map12 = useTestMemo1(a);
  // console.log(map11 == map12);
  console.log(map11);
  // const map21 = useTestMemo2(a);
  // const map22 = useTestMemo2(a);
  // useMemo只有在组件重新渲染时才生效，但是如果重复调用两次，这里的useMemo并不能起到缓存的作用
  // 如果是count-state变化引起的组件重新渲染，那么才会起到该有的缓存作用；
  // console.log(map21 == map22); // false
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      对memo+自定义hooks的理解
      {count}
      <button onClick={handleClick}> add 1</button>
    </div>
  );
}

export const Component = MemoPageTest;
