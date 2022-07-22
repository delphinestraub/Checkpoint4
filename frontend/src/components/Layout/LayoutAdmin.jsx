import React from "react";
import { Outlet } from "react-router";

export default function LayoutFront() {
  return (
    <div>
      <div className="color" style={{ backgroundColor: "blue" }}>
        <Outlet />
      </div>
    </div>
  );
}
