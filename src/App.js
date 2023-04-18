import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.js";

import ProjectList from "./components/projectList/projectList.js";
import Aboutme from "./components/aboutme/aboutme.js";
import Articles from "./components/articles/articles.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/" element={<ProjectList />}></Route>
      <Route path="/aboutme" element={<Aboutme />}></Route>
      <Route path="/articles" element={<Articles />}></Route>
   
    </Routes>
  );
}

export default App;
