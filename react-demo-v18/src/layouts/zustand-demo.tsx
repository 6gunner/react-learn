import React from "react";
import { Outlet } from "react-router-dom";

export default function ZustandDemoLayout() {
  return (
    <div>
      这里是一些zustand的demo
      <Outlet />
    </div>
  );
}
