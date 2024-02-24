import React, { useEffect, useRef } from "react";



import "./profile.css";
import "./myExperience.css";
import "./blog.css";



import BlogArticle1 from "../blogArticles.js/blogArticle1";
import BlogArticle2 from "../blogArticles.js/blogArticle2";
import BlogArticle3 from "../blogArticles.js/blogArticle3";
import BlogArticle4 from "../blogArticles.js/blogArticle4";
import BlogArticle5 from "../blogArticles.js/blogArticle5";
import BlogArticle6 from "../blogArticles.js/blogArticle6";

function BlogsList() {
  const articlesRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Define el umbral de visibilidad del elemento
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Agrega la clase "visible" cuando el elemento está visible
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    articlesRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [articlesRefs]);

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
      <div className="blog-articles">
        <BlogArticle6 ref={articlesRefs[0]} />
        <BlogArticle5 ref={articlesRefs[1]} />
        <BlogArticle4 ref={articlesRefs[2]} />
        <BlogArticle1 ref={articlesRefs[3]} />
        <BlogArticle2 ref={articlesRefs[4]} />
        <BlogArticle3 ref={articlesRefs[5]} />
      </div>
    </div>
  );
}

export default BlogsList;
