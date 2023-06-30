import React from "react";
import Imagen from "../../../assests/images/11.png";
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
      <h2 className="cardTitle">Zuca Arq Project</h2>
      <span className="cardText">
        This platform is a useful tool for architects and designers that allows
        them to display and manage their architectural projects efficiently.
        Below I will briefly describe the structure and key features of my
        project.
      </span>
      <div className="cardContentLink">
        <Link className="cardLink" to="/ProjectDescription6">
          <AiOutlineArrowRight></AiOutlineArrowRight> A litle more about this
          project?
        </Link>
        <Link className="cardLink" to="https://github.com/DiegoDimitroffPetcoff/ZucaBranch">
          <AiFillGithub></AiFillGithub> GIT HUB CODE FRONT
        </Link>
   
        <Link className="cardLink" to="https://github.com/DiegoDimitroffPetcoff/zucaArq">
          <AiFillGithub></AiFillGithub> GIT HUB CODE BACK
        </Link>
        <Link className="cardLink" to="https://zucaarct.vercel.app/">
          <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOYED CODE
        </Link>
        <Link
               className="cardLink"
              to="https://www.linkedin.com/pulse/my-web-development-project-platform-architectural-diego-leonardo%3FtrackingId=cy46zjxnVqwEezUumsKDcg%253D%253D/?trackingId=cy46zjxnVqwEezUumsKDcg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFile></AiOutlineFile> Article that I wrote about this project
            </Link>
      </div>
    </div>
  );
}

export default Article6;
