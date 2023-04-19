import React from "react";

import Header from "../header/header";
import "./projectsList.css";
import './project/project.css'
import Article1 from "./project/project1";
import Article2 from "./project/project2";
import Article3 from "./project/project3";
import Article4 from "./project/project4";
import Article5 from "./project/project5";
import Article6 from "./project/project6";

function ProjectsList() {
  return (
    <div >
      <Header></Header>
      <h1 className="titlePage">Projects</h1>
      <h2 className="subtitlePage">In this section I will be posting all my projects, from the newest to the oldest.</h2>
      <div className="articlesContent">
      <Article1></Article1>
      <Article2></Article2>
      <Article3></Article3>
      <Article4></Article4>
      <Article5></Article5>
      <Article6></Article6>
      </div>
    </div>
  );
}

export default ProjectsList;
