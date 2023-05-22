import React from "react";
import "../welcome/blog.css";
import { Link } from "react-router-dom";
import { AiOutlineDeploymentUnit, AiFillGithub } from "react-icons/ai";
import Imagen from "../../assests/images/11.png";
function BlogArticle5() {
  return (
    <div className="conteinerBlog">
      <h6 className="dateBlog">22/05/23 </h6>
      <h2 className="titleBlog">
        Zuca Arq Project - Full Stack development (stack MERN + Claudinary)
      </h2>
      <div className="textBlog">
        <div>
          I am happy to be able to start working with some new ventures that are
          looking to go on the market! On this occasion I started working for
          the ZUCA brand, which is located in Argentina - Chaco. In this case my
          development is carried out in FULL STACK mode.Although the project is
          still in development, I am proud to present a small preview of it. In
          this case I have done everything myself, both the Backend and the
          Fronted part.
        </div>{" "}
        <div>
          Regarding the code that you see in the backend... I am using two
          different projects, in the case of the login I use a job that I have
          created previously. As for the CRUD of the project... I use a new job
          that I generated specifically for this job.
        </div>
        <div>
          From the Frontend I started to use REDUX to work with the login and
          generate the global state of the application. As for the database, use
          MongooDb and the images are stored in cloudinary. They are rendered
          automatically if they are created or deleted. The back is deployed in
          Render.com, which has the particularity of being a bit slow every time
          an HTTP request is sent from the front (this happens because obviously
          the server is not activated at all times). To try to lessen this
          problem a bit, automatically place an action with AXIOS in order to
          perform a GET request only in order to activate the server in Render
          (in case it is not already active) and thus reduce the time a bit.
          waiting to receive information from it (of course this happens because
          I am using a free host... if it was paid I would not need to do it)
        </div>
        <div>
          The front is deployed on Vercel which offers an excellent free
          service. The web design was done by myself...following the color
          patterns requested by the client.
        </div>
        <div>
          An interesting question to take into account is that the project is
          designed so that only the administrator can have access to the
          Login... that is to say that it does not have a "LOGIN" button
          itself... for this we must go to the route "/login" manually to access
          it... and enter the credentials that I as a programmer offer to the
          client. Then, when logged in, he will be able to access a dashboard to
          add or remove projects with images or edit his personal information.
        </div>
        <div>
          At the moment the project is in development but I hope to finish it
          this week. Until then, I'll leave you the code that I'm developing and
          the deployed project so you can take a look! :)
        </div>
      </div>


      <Link
        className="LinkBlog"
        to="https://zucaarct.vercel.app/"
        target="_blank"
        rel="Frontend Made in REACT JS"
      >
        <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit>Deploy Project
      </Link>

      <Link
        className="LinkBlog"
        to="https://github.com/DiegoDimitroffPetcoff/ZucaBranch"
        target="_blank"
        rel="Git Hub Code Frontend"
      >
        <AiFillGithub></AiFillGithub>Frontend (React Js)
      </Link>

      <Link
        className="LinkBlog"
        to="https://github.com/DiegoDimitroffPetcoff/loginBack/"
        target="_blank"
        rel="Backend Login"
      >
        <AiFillGithub></AiFillGithub>Backend Login.
      </Link>

      <Link
        className="LinkBlog"
        to="https://github.com/DiegoDimitroffPetcoff/zucaArq/"
        target="_blank"
        rel="Backend CRUD Zuca Branch"
      >
        <AiFillGithub></AiFillGithub>Backend CRUD.
      </Link>

      <div>
        <img className="imagePostBlog" src={Imagen} alt="Ecommerce Project" />
      </div>
    </div>
  );
}

export default BlogArticle5;
