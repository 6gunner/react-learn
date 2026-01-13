import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ZustandDemoLayout from "./layouts/zustand-demo";
import ReactDemoRoot from "./layouts/react-demo";

createRoutesFromElements;
const router = createBrowserRouter([
  {
    path: "/react-demo",
    element: <ReactDemoRoot />,
    children: [
      {
        path: "effect",
        lazy: () => import("./pages/testEffect/demo1"),
      },
      {
        path: "ref",
        lazy: () => import("./pages/testRef/demo5"),
      },
      {
        path: "ref/demo6",
        lazy: () => import("./pages/testRef/demo6"),
      },
      {
        path: "customHook",
        lazy: () => import("./pages/testCustomHook/demo1"),
      },
      {
        path: "syncExternalStore",
        lazy: () => import("./pages/testUseSyncExternalStore"),
      },
      {
        path: "portal/demo1",
        lazy: () => import("./pages/testPortal/demo1"),
      },
      {
        path: "fiber/demo1",
        lazy: () => import("./pages/testFiber/demo1"),
      },
      {
        path: "memo/demo1",
        lazy: () => import("./pages/testMemo/index"),
      },
      {
        path: "state/demo1",
        lazy: () => import("./pages/testState/useState_vs_setState"),
      },
    ],
  },
  {
    path: "/zustand-demo",
    element: <ZustandDemoLayout />,
    children: [
      {
        path: "base",
        lazy: () => import("./pages/testZustand/demo1"),
      },
    ],
  },
]);

export default router;
