import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import LogoTransparent from "../assests/images/logo-transparent-white.png";
import Profile from "../components/common/profile";
import WorkingOnPage from "../components/common/workingOnPage";

const Layout = lazy(() => import("../components/common/layout"));
const Projects = lazy(() => import("../components/projects/projects"));
const Blog = lazy(() => import("../components/blogs/blog"));

function Spinning() {
  return (
    <img
      data-aos="fade-right"
      src={LogoTransparent}
      alt="Logo Diego Dimitrogg"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

const RoutesIndex = () => {
  return (
    <Suspense fallback={<Spinning />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Profile />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="workingOnPage" element={<WorkingOnPage />}></Route>
        </Route>

        <Route
          path="*"
          element={"404 - Sorry this Route does not exist :) "}
        ></Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesIndex;
