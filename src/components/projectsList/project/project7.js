import React from "react";
import Imagen from "../../../assests/images/13.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
  AiOutlineFile
} from "react-icons/ai";

function Article6() {
  return (
    <div className="card">
      <img
        className="imagenArticle"
        src={Imagen}
        alt="Rock, Paper and scissors"
      />
      <h2 className="cardTitle">Nails Project</h2>
      <span className="cardText">
      This front project offers the possibility of registration and login, giving the administrator the possibility of incorporating other users with said category. It has the possibility of uploading videos to be able to offer online courses and students can obtain certification
      </span>
      <div className="cardContentLink">
        <Link className="cardLink" to="/ProjectDescription7">
          <AiOutlineArrowRight></AiOutlineArrowRight> A litle more about this
          project?
        </Link>
        <Link className="cardLink" to="https://github.com/DiegoDimitroffPetcoff/schoolproject">
          <AiFillGithub></AiFillGithub> GIT HUB CODE FRONT
        </Link>
   
        <Link className="cardLink" to="https://github.com/DiegoDimitroffPetcoff/backSchoolNeals">
          <AiFillGithub></AiFillGithub> GIT HUB CODE BACK
        </Link>
        <Link className="cardLink" to="https://schoolproject-nine.vercel.app/">
          <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOYED CODE
        </Link>
      </div>
    </div>
  );
}

export default Article6;
