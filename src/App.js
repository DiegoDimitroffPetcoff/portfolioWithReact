import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.js";


import Aboutme from "./components/aboutme/aboutme.js";
import ProjectsList from "./components/projectsList/projectsList.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/" element={<ProjectsList />}></Route>
      <Route path="/aboutme" element={<Aboutme />}></Route>
      <Route path="/projectlist" element={<ProjectsList />}></Route>
   
    </Routes>
  );
}

export default App;
