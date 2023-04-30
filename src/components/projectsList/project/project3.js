import React from "react";
import Imagen from "../../../assests/images/5.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";

function Article3() {
  return (
    <div className="card">
      <img className="imagenArticle" src={Imagen} alt="Ecommerce Project" />
      <h2 className="cardTitle">E-COMMERCE PROJECT</h2>
      <span className="cardText">
        This is my first experience working in a team. This project is an App to
        manage a gym. Here my participation was within the Backend team and we
        work with different technologies. On the Backend: Node.js and Express,
        and on the Frontend with React js.
      </span>
      <div className="cardContentLink">
        <Link className="cardLink" to="/projectDescription3">
          <AiOutlineArrowRight></AiOutlineArrowRight> A litle more about this
          project?
        </Link>
        <Link
          className="cardLink"
          to="https://github.com/DiegoDimitroffPetcoff/GYM-administration-APP"
        >
          <AiFillGithub></AiFillGithub> GIT HUB CODE
        </Link>
        {/* <Link className="cardLink" to="/">
          <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
        </Link>*/}
      </div>
    </div>
  );
}

export default Article3;
