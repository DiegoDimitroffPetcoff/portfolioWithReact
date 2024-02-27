import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("../components/common/layout"));

const RoutesIndex = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
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
