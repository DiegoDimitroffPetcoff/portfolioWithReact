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
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);
  const article3Ref = useRef(null);
  const article4Ref = useRef(null);
  const article5Ref = useRef(null);
  const article6Ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const articlesRefs = [
      article1Ref,
      article2Ref,
      article3Ref,
      article4Ref,
      article5Ref,
      article6Ref,
    ];

    articlesRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [article1Ref, article2Ref, article3Ref, article4Ref, article5Ref, article6Ref]);

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
        <BlogArticle6 ref={article6Ref} />
        <BlogArticle5 ref={article5Ref} />
        <BlogArticle4 ref={article4Ref} />
        <BlogArticle1 ref={article1Ref} />
        <BlogArticle2 ref={article2Ref} />
        <BlogArticle3 ref={article3Ref} />
      </div>
    </div>
  );
}

export default BlogsList;
