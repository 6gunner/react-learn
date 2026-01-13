import React from "react";
import { Outlet } from "react-router-dom";

export default function ReactDemoLayout() {
  return (
    <div>
      这里是一些react理解的demo
      <Outlet />
    </div>
  );
}
