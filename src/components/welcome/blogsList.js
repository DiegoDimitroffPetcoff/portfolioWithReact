import React, { useEffect, useRef } from "react";



import "./profile.css";
import "./myExperience.css";
import "./blog.css";

import { Link, useLocation } from "react-router-dom";

import BlogArticle1 from "../blogArticles.js/blogArticle1";
import BlogArticle2 from "../blogArticles.js/blogArticle2";
import BlogArticle3 from "../blogArticles.js/blogArticle3";
import BlogArticle4 from "../blogArticles.js/blogArticle4";
import BlogArticle5 from "../blogArticles.js/blogArticle5";

import "./welcome.css";
function BlogsList({ scrollToBlogArticle5 }) {

  const blogArticle5Ref = useRef(null);

  useEffect(() => {
    if (scrollToBlogArticle5 && blogArticle5Ref.current) {
      window.scrollTo({
        top: blogArticle5Ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [scrollToBlogArticle5]);

  const blogArticles = [
    <BlogArticle5 key="article5" />,
    <BlogArticle4 key="article4" />,
    <BlogArticle1 key="article1" />,
    <BlogArticle2 key="article2" />,
    <BlogArticle3 key="article3" />,
  ];


  return (
    <div className="conteinerBlogList">
      <h1 className="titleBlogList">WORK BLOG</h1>
      <div className="textBlogList">
        This is a space where I will be posting projects that I am currently
        working on.! Many times it is a bit difficult to keep the portfolio
        updated. Technology is changing day by day and at a very fast pace, that
        is why I have created this Blog where I will gradually show the projects
        I am working on, the ideas that arise and much more
      </div>
      {blogArticles.map((article) => (
        <div key={article.key}>{article}</div>
      ))}
    </div>
  );
}

export default BlogsList;
