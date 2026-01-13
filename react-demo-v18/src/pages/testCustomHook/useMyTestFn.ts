import { useCallback, useState, } from "react";
import { wait } from "../../utils/wait";

export function useMyTestFn() {

  const [isLockLoading, setIsLockLoading] = useState(false);

  const method = async () => {
    setIsLockLoading(true);
    await wait(1000);
    setIsLockLoading(false);
  }

  const testFn = useCallback((name: string) => {
    console.log("hello," + name);
    return "hello" + name;
  }, [])

  // const testFn = (name: string) => {
  //   console.log("hello," + name);
  //   return "hello" + name;
  // }

  return { isLockLoading, method, testFn };

}