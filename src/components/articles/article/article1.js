import React from "react";
import Imagen from "../../../assests/images/2.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Article1() {
  return (
    <div className="card">
      <img className="imagenArticle" src={Imagen} alt="Ecommerce Project" />
      <h2 className="cardTitle">Title</h2>

      <span className="cardText">
        {" "}
        This is the project I am currently working on. It has an MVC
        architecture, which is generated with NODE.JS, using Express. It is
        currently under construction, but its functionalities can be observed.
        This project was being deployed by Heroku app until recently. A few days
        ago I moved the deploy to a new tool called Railway. You can read the
        article I wrote about it HERE!
      </span>
  
      <Link className="cardLink" to="/">
      <span className="cardIcon">
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </span> A litle more about this project?
      </Link>
    </div>
  );
}

export default Article1;
