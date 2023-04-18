import React from "react";
import { Outlet } from "react-router-dom";

function ProjectList() {
  return (
    <div>
      <h1>  HOME</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default ProjectList;
