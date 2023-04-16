import React from "react";
import { Outlet } from "react-router-dom";

function ProjectList() {
  return (
    <div>
      <h1>Project</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default ProjectList;
