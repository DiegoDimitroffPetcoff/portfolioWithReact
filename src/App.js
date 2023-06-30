import React from "react";
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

import MyStudies from "./components/welcome/myStudies.js"
import ArticlesList from "./components/articles/articlesList.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route> 
      <Route path="/aboutme" element={<Aboutme />}></Route>
      <Route path="/projectlist" element={<ProjectsList />}></Route>
   
      <Route path="/projectDescription1" element={<ProjectDescription1 />}></Route> 
      <Route path="/projectDescription2" element={<ProjectDescription2 />}></Route>    
      <Route path="/projectDescription3" element={<ProjectDescription3 />}></Route> 
      <Route path="/projectDescription4" element={<ProjectDescription4 />}></Route>     
      <Route path="/projectDescription5" element={<ProjectDescription5 />}></Route>   
      <Route path="/projectDescription6" element={<ProjectDescription6 />}></Route>
      <Route path="/aboutMyStudies" element={<MyStudies />}></Route> 
      <Route path="/articlesList" element={<ArticlesList/>}></Route> 
      <Route path="/project5" element={<Header scrollToBlogArticle5={true} />} />

      
   
    </Routes>
  );
}

export default App;
