import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Header from "../components/header/header";
import Aboutme from "../components/aboutme/aboutme";
import ProjectsList from "../components/projectsList/projectsList";

import MyStudies from "../components/layout/myStudies.js";
import ArticlesList from "../components/articles/articlesList";

const ProjectDescription1 = lazy(() =>
  import(
    "../components/projectsList/projectDescriptions.js/project1Description.js"
  )
);
const ProjectDescription2 = lazy(() =>
  import(
    "../components/projectsList/projectDescriptions.js/project2Description.js"
  )
);
const ProjectDescription3 = lazy(() =>
  import(
    "../components/projectsList/projectDescriptions.js/project3Description.js"
  )
);
const ProjectDescription4 = lazy(() =>
  import(
    "../components/projectsList/projectDescriptions.js/project4Description.js"
  )
);
const ProjectDescription5 = lazy(() =>
  import(
    "../components/projectsList/projectDescriptions.js/project5Description.js"
  )
);
const ProjectDescription6 = lazy(() =>
  import(
    "../components/projectsList/projectDescriptions.js/project6Description.js"
  )
);
const ProjectDescription7 = lazy(() =>
  import(
    "../components/projectsList/projectDescriptions.js/project7Description.js"
  )
);
const ProjectDescription8 = lazy(() =>
  import(
    "../components/projectsList/projectDescriptions.js/project8Description.js"
  )
);

const RoutesIndex = () => {
  const allProjectsDescriptions = [
    ProjectDescription1,
    ProjectDescription2,
    ProjectDescription3,
    ProjectDescription4,
    ProjectDescription5,
    ProjectDescription6,
    ProjectDescription7,
    ProjectDescription8,
  ];
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/aboutme" element={<Aboutme />}></Route>
        <Route path="/projectlist" element={<ProjectsList />}></Route>
        {allProjectsDescriptions.map((Project, index) => (
          <Route
            key={index}
            path={`/projectDescription${index + 1}`}
            element={<Project />}
          ></Route>
        ))}
        <Route path="/aboutMyStudies" element={<MyStudies />}></Route>
        <Route path="/articlesList" element={<ArticlesList />}></Route>

        <Route
          path="*"
          element={"404 - Sorry this Route does not exist :) "}
        ></Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesIndex;
