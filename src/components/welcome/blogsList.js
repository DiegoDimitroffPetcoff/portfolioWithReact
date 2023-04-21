import React from "react";

import "./profile.css";
import "./myExperience.css";
import "./blog.css"
import BlogArticle1 from "../blogArticles.js/blogArticle1";



import "./welcome.css";
function BlogsList() {
  return (
    <div className="conteinerBlogList">
   
      <h1 className="titleBlogList">WORK BLOG</h1>
      <div className="textBlogList">
       This is a space where I will be posting projects that I am
      currently working on.! Many times it is a bit difficult to keep the
      portfolio updated. Technology is changing day by day and at a very fast
      pace, that is why I have created this Blog where I will gradually show the
      projects I am working on, the ideas that arise and much more
      </div>
    
      <div><BlogArticle1></BlogArticle1></div>
   

     
    </div>
  );
}

export default BlogsList;
