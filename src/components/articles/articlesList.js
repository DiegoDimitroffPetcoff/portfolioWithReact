import React, { useState } from "react";

import Nav from "../nav/nav";
import Welcome from "../welcome/welcome";
import Article from "../blogArticles.js/blogArticle2";
import "./articles.css";
import Article1 from "./article/article1";

function ArticlesList() {
  return (
    <div className="flex">
          <Nav></Nav>
      <Welcome></Welcome>
      <span className="contentArticles">
      <h1 className="titlePage">Articles Writes By me</h1>
      <h2 className="subtitlePage">
        This is a section in which you will be able to see some articles that I
        had the opportunity to write about different topics that I found
        interesting. Enjoy the trip!
      </h2>
      <Article1></Article1>
      <Article1></Article1>
      <Article1></Article1>
      </span>
    </div>
  );
}

export default ArticlesList;
