import React from "react";
import "../welcome/blog.css";
import { Link } from "react-router-dom";
import {  AiFillGithub } from "react-icons/ai";
import Imagen from "../../assests/images/15.png";
function BlogArticle6() {
  return (
    <div className="conteinerBlog">
      <h6 className="dateBlog">17/01/24 </h6>
      <h2 className="titleBlog">
        Indire Project - Full Stack development (React Js + PWF + Microsoft Graph)
      </h2>
      <div className="textBlog">
        <div>
          New project in development! This is an application that will be used by a company specializing in building renovations. In this case, the client's need to address is to optimize the analysis process they undertake for new projects, thereby streamlining the work currently required to describe and detail all the tasks for a new client.
          With this application, the client will be able to create new projects, which will serve to detail all the work required for their clients (the renovations needed in specific buildings). They will also have the ability to streamline the creation of detailed budgets for each section to be developed, generate PDF and WORD documents from them, and automate saving them directly to their ONEDRIVE account.
          This project has the interesting feature of being developed solely on the frontend with JavaScript and using OneDrive (in a manner of speaking) as a database, as all documents will be saved automatically.
          The entire project will be formatted as a PWA with the goal of being usable on Android devices and PCs initially. The application will work both offline and online, so that information created is saved, and when reconnected, changes are compared with those currently stored to update appropriately..
        </div>{" "}
        <div>
          For the moment, the project is currently in development
        </div>

      </div>

      <Link
        className="LinkBlog"
        to="https://github.com/DiegoDimitroffPetcoff/INDIRE-PWA"
        target="_blank"
        rel="Git Hub Code Frontend"
      >
        <AiFillGithub></AiFillGithub>Frontend (React Js)
      </Link>

      <div>
        <img className="imagePostBlog" src={Imagen} alt="Indire Project Picture" />
      </div>
    </div>
  );
}

export default BlogArticle6;
