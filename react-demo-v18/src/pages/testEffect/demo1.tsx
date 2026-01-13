import { useEffect, useState } from "react";

/**
 * demo1: 测试为什么effect里不能用async
 * @returns
 */

const myPromise = () => {
  return new Promise((resolve, reject) => {
    resolve("a");
  });
};

function TestEffectPage() {
  useEffect(async () => {
    const t = await myPromise();
    console.log(t);
  }, []);

  // useEffect(() => {
  //   return myPromise();
  // }, []);

  return (
    <div>
      <div>打开f12, 查看报错信息</div>
    </div>
  );
}

export const Component = TestEffectPage;
