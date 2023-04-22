import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.js";


import Aboutme from "./components/aboutme/aboutme.js";
import ProjectsList from "./components/projectsList/projectsList.js";

import ProjectDescription1 from "./components/projectsList/projectDescriptions.js/project1Description.js";

import MyStudies from "./components/welcome/myStudies.js"
import ArticlesList from "./components/articles/articlesList.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route> 
      <Route path="/aboutme" element={<Aboutme />}></Route>
      <Route path="/projectlist" element={<ProjectsList />}></Route>
      <Route path="/projectDescription1" element={<ProjectDescription1 />}></Route>     
      <Route path="/aboutMyStudies" element={<MyStudies />}></Route> 
      <Route path="/articlesList" element={<ArticlesList/>}></Route> 

   
    </Routes>
  );
}

export default App;
