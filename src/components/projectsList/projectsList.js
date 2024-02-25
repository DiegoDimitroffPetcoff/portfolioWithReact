import React from "react";
import Nav from "../nav/nav";

import "./projectsList.css";
import './project/project.css'
import Article1 from "./project/project1";
import Article2 from "./project/project2";
import Article3 from "./project/project3";
import Article4 from "./project/project4";
import Article5 from "./project/project5";
import Article6 from "./project/project6";
import Article7 from "./project/project7";
import Article8 from "./project/project8";
import Layout from "../layout/layout";

function ProjectsList() {
  const articles = [
    Article8,
    Article7,
    Article6,
    Article5,
    Article1,
    Article2,
    Article3,
    Article4,

  ];
  return (
    <div >
   <Nav></Nav>
   <Layout/>
      <h1 className="titlePage">Projects</h1>
      <h2 className="subtitlePage">In this section I will be posting all my projects, from the newest to the oldest.</h2>
      <div className="projectsContent">
        {/* Itera sobre el array de artículos y renderiza cada uno */}
        {articles.map((ArticleComponent, index) => (
          <ArticleComponent key={index} />
        ))}

      </div>
    </div>
  );
}

export default ProjectsList;
