import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import LogoTransparent from "../assests/images/logo-transparent-white.png";
import Profile from "../components/common/profile";

const Layout = lazy(() => import("../components/common/layout"));
const Projects = lazy(() => import("../components/projects/projects"));

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
        </Route>
        {/*         <Route path="/aboutme" element={<Aboutme />}></Route>
        <Route path="/projectlist" element={<ProjectsList />}></Route>
        {allProjectsDescriptions.map((Project, index) => (
          <Route
            key={index}
            path={`/projectDescription${index + 1}`}
            element={<Project />}
          ></Route>
        ))}
        <Route path="/aboutMyStudies" element={<MyStudies />}></Route>
        <Route path="/articlesList" element={<ArticlesList />}></Route> */}

        <Route
          path="*"
          element={"404 - Sorry this Route does not exist :) "}
        ></Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesIndex;
