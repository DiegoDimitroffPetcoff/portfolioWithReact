import React from "react";
import "../welcome/blog.css";

function BlogArticle2() {
  return (
    <div className="conteinerBlog">
      <h6 className="dateBlog">15/12/22 </h6>
      <h2 className="titleBlog">Migration from Heroku app to Railway</h2>
      <div className="textBlog">
        This is my first article written from my linkedin account. My intention
        is to tell a little about the process of migrating from a tool like
        Heroku to a new one that can currently be used for free!.
      </div>
      <div>
        <iframe
         className="linkedinPostBlog"
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7008750196180316160"
          border-radius="0px"
          allowfullscreen=""
          title="Embedded post"
          height="500"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default BlogArticle2;
