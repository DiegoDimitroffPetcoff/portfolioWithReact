import React from "react";
import Imagen from "../../../assests/images/7.png"
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";


function Article3() {
  return (
    <div className="card">
    
    <img className="imagenArticle" src={Imagen} alt="Ecommerce Project"/>
    <h2 className="cardTitle">Title</h2>
    <span className="cardText">TEXTO descriptivo</span>
    <div className="cardContentLink">
        <Link className="cardLink" to="/">
          <AiOutlineArrowRight></AiOutlineArrowRight> A litle more about this
          project?
        </Link>
        <Link className="cardLink" to="/">
          <AiFillGithub></AiFillGithub> GIT HUB CODE
        </Link>
        <Link className="cardLink" to="/">
          <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
        </Link>
      </div>
    </div>
  );
}

export default Article3;
