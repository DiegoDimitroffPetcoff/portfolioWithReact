import React from "react";
import "../welcome/blog.css";
import { Link } from "react-router-dom";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import Imagen from "../../assests/images/10.png"
function BlogArticle4() {
  return (
    <div className="conteinerBlog">
      <h6 className="dateBlog">28/04/23 </h6>
      <h2 className="titleBlog">
        Migrating from a static project to a scalable one in React
      </h2>
      <div className="textBlog">
        In this article, I will present my new project built in React, showcase
        the previous one and compare the two websites that I have constructed to
        observe the differences in technologies and design. The new site,
        https://diegodimitroffpetcoff-f5qv9vv5a-diegodimitroffpetcoff.vercel.app/,
        is a React application with reusable components, while the old website,
        https://diegodimitroffpetcoff.github.io/Porfolio/, is a static page
        built with HTML, CSS, and JavaScript. Although both options are valid
        for building websites, it is interesting to see how different
        technologies have been used for each project. In terms of design, the
        new website has a more minimalist style and uses a softer color palette,
        while the old website uses more vibrant colors. Of course, I have found
        some preferences and that is why I decided to make modifications in the
        new project. I can say that the differences in design may be due to the
        nature of each project, with the first website being more focused on
        simplicity and functionality, and the second website being more focused
        on visual design. In terms of file structure, the new website uses a
        typical folder and file structure of a React application, while the
        second website has all its files at the root of the GitHub repository.
        My intention with this is to reflect my evolution as a developer over
        time and how I have learned to structure my projects more efficiently.
        In conclusion, comparing two built websites can be an excellent way to
        observe differences in technologies, design, and file structure.
        Although each project is unique and should be built with its own needs
        in mind, observing how other developers build their websites can provide
        valuable ideas and knowledge for our own work. I hope you have time to
        browse my portfolio and see my work!
      </div>
      <div className="LinkBlog"> 👇 Check them!!</div>

      <Link
        className="LinkBlog"
        to="https://diegodimitroffpetcoff.github.io/Porfolio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit>Old Project
      </Link>

      <Link
        className="LinkBlog"
        to="https://diegodimitroffpetcoff-f5qv9vv5a-diegodimitroffpetcoff.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit>New Project made in ReactJS.
      </Link>

      <div>
      <img className="imagePostBlog" src={Imagen} alt="Ecommerce Project" />
      </div>
    </div>
  );
}

export default BlogArticle4;
