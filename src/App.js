import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.js";

import ProjectList from "./components/projectList/projectList.js";


function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Header />}>

 
      </Route>
      
      <Route path="/Projectlist" element={<ProjectList />}></Route>
      
    </Routes>
  
  );
}

export default App;
