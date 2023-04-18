import React from "react";

import Header from "../header/header";
import "./articles.css";
import './article/article.css'
import Article1 from "./article/article1";
import Article2 from "./article/article2";
import Article3 from "./article/article3";
import Article4 from "./article/article4";
import Article5 from "./article/article5";

function Articles() {
  return (
    <div >
      <Header></Header>
      <h1 className="titlePage">Some Artickes</h1>
      <div className="articlesContent">
      <Article1></Article1>
      <Article2></Article2>
      <Article3></Article3>
      <Article4></Article4>
      <Article5></Article5>
      </div>
    </div>
  );
}

export default Articles;
