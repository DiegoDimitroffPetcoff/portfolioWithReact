import React from "react";
import Imagen from "../../../assests/images/14.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
  AiOutlineFile
} from "react-icons/ai";

function Article8() {
  return (
    <div className="card">
      <img
        className="imagenArticle"
        src={Imagen}
        alt="Rock, Paper and scissors"
      />
      <h2 className="cardTitle">CHAT APP</h2>
      <span className="cardText">
      Project done as a team within the NO COUNTRY community. This is a chat application where the user can interact with other people 
      </span>
      <div className="cardContentLink">
        <Link className="cardLink" to="/ProjectDescription8">
          <AiOutlineArrowRight></AiOutlineArrowRight> A litle more about this
          project?
        </Link>
        <Link className="cardLink" to="https://c13-13-n-node-react-n72y.vercel.app/">
          <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOYED CODE
        </Link>
      </div>
    </div>
  );
}

export default Article8;
