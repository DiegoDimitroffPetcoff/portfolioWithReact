import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.js";


import Aboutme from "./components/aboutme/aboutme.js";
import ProjectsList from "./components/projectsList/projectsList.js";


import ProjectDescription1 from "./components/projectsList/projectDescriptions.js/project1Description.js";
import ProjectDescription2 from "./components/projectsList/projectDescriptions.js/project2Description.js";
import ProjectDescription3 from "./components/projectsList/projectDescriptions.js/project3Description.js";
import ProjectDescription4 from "./components/projectsList/projectDescriptions.js/project4Description.js";
import ProjectDescription5 from "./components/projectsList/projectDescriptions.js/project5Description.js";
import ProjectDescription6 from "./components/projectsList/projectDescriptions.js/project6Description.js";
import ProjectDescription7 from "./components/projectsList/projectDescriptions.js/project7Description.js";
import ProjectDescription8 from "./components/projectsList/projectDescriptions.js/project8Description.js";

import MyStudies from "./components/welcome/myStudies.js"
import ArticlesList from "./components/articles/articlesList.js";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({ delay: 2});
  }, [])
  
  const allProjectsDescriptions = [ProjectDescription1, ProjectDescription2, ProjectDescription3, ProjectDescription4, ProjectDescription5, ProjectDescription6, ProjectDescription7, ProjectDescription8]
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/aboutme" element={<Aboutme />}></Route>
      <Route path="/projectlist" element={<ProjectsList />}></Route>
      {allProjectsDescriptions.map((Project, index) => (
        <Route key={index} path={`/projectDescription${index + 1}`} element={<Project />}></Route>
      ))}
      <Route path="/aboutMyStudies" element={<MyStudies />}></Route>
      <Route path="/articlesList" element={<ArticlesList />}></Route>
      <Route path="/project5" element={<Header/>} />
    </Routes>
  );
}

export default App;
