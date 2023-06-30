import React from "react";
import Imagen from "../../../assests/images/12.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
  AiOutlineVideoCamera,
} from "react-icons/ai";
function Article5() {
  return (
    <div className="card">
      <img className="imagenArticle" src={Imagen} alt="Ecommerce Project" />
      <h2 className="cardTitle">School API</h2>
      <span className="cardText">
        , API Res works with MongoDB, Node.js, and Express. The architecture is
        designed to make scalability in databases easy to achieve. It uses Open
        Cors and will be used with a React project to demonstrate its
        usefulness.
      </span>
      <div className="cardContentLink">
        <Link className="cardLink" to="/ProjectDescription6">
          <AiOutlineArrowRight></AiOutlineArrowRight> A litle more about this
          project?
        </Link>
        <Link
          className="cardLink"
          to="https://github.com/DiegoDimitroffPetcoff/backSchoolNeals"
        >
          <AiFillGithub></AiFillGithub> GIT HUB CODE
        </Link>
        <Link
          className="cardLink"
          to="https://www.linkedin.com/posts/diegodimitroffpetcoff_hi-there-as-i-said-a-few-days-ago-activity-7079911327955136512-kZbF?utm_source=share&utm_medium=member_desktop"
        >
          <AiOutlineVideoCamera></AiOutlineVideoCamera> VIDEO TUTORAL AND ARTICLE ON MY LINKEDIN
        </Link>
        {/*   <Link className="cardLink" to="/">
          <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
        </Link>*/}
      </div>
    </div>
  );
}

export default Article5;
