import React from "react";
import Nav from "../../nav/nav";

import Imagen from "../../../assests/images/7.png";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiFillGithub,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";
import Welcome from "../../welcome/welcome";

import "./projectDescription.css";
function ProjectDescription2() {
  return (
    <div>
      <Nav></Nav>
      <Welcome></Welcome>
      <div className="projectDescriptionContainer">
        <h2 className="projectDescriptionTitle">My first React Project </h2>
        <img
          className="imagenProjectDescription"
          src={Imagen}
          alt="My First React Project"
        />

        <span className="projectDescriptionText">
          <div>INTRODUCCION</div>
          The application consists of a main page (Home) that displays a header
          and a projects section, and a project detail page (ProjectDetails)
          that displays detailed information about a selected project. The Home
          page displays a list of projects obtained from a projects.js data
          file. Each project is represented as a ProjectCard component that
          contains basic project information and a "View Details" button that
          takes the user to the corresponding project detail page. The Home page
          uses the ProjectsList component to render the full list of projects.
          The ProjectDetails page receives the ID of the selected project as a
          URL parameter using the useParams hook from React Router. It then
          looks up the corresponding project information in the projects.js data
          file and displays it on the page. The ProjectDetails page uses the
          ProjectImage, ProjectDescription, and ProjectTech components to
          display different aspects of the project. The App.js file contains the
          App component that implements the application routing using React
          Router. The App component defines two routes using the React Router
          Route component: one for the main page (Home) and one for the project
          detail page (ProjectDetails). The Switch component is used to ensure
          that only one route is rendered at a time. As for the project
          structure, the components are stored in the components folder, while
          the project data is stored in the data folder. The CSS style file is
          located in the styles folder. In summary, the project implements a
          simple web application using React and React Router, which displays a
          list of projects and allows users to view detailed information about
          each project.
          <div className="projectDescriptionLinks">
            <Link className="projectDescriptionLink" to="https://react-project-kiruna-trip.netlify.app/">
              <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit> DEPLOY CODE
            </Link>
            <Link
              className="projectDescriptionLink"
              to="https://github.com/DiegoDimitroffPetcoff/reactProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub></AiFillGithub> GIT HUB CODE
            </Link>
          </div>
        </span>

        <Link className="cardLink" to="/projectlist">
          BACK
        </Link>
      </div>
    </div>
  );
}

export default ProjectDescription2;
