import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import projects from "./projectList.json";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { IoServerOutline } from "react-icons/io5";

const ProjectsList = () => {
  return (
    <div className="contentProjectList">
      {projects.map((project, index) => (
        <Card style={{ width: "18rem", margin: "5px" }} data-aos="flip-left" key={index}>
          <Card.Img
            variant="top"
            src={require(`../../assests/images/${project.Img}`)}
          />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.descriction}</Card.Text>
            <div style={{display:"flex", justifyContent:"space-around"}}>
              {project.GitHubLinkFront ? (
                <Link target="_blank" to={project.GitHubLinkFront}>
                  <FaGithub />
                </Link>
              ) : null}
              {project.DeployLink ? (
                <Link target="_blank" to={project.DeployLink}>
                  <FaReact />
                </Link>
              ) : null}
              {project.GitHubLinkBack ? (
                <Link target="_blank" to={project.GitHubLinkBack}>
                  <IoServerOutline />
                </Link>
              ) : null}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default ProjectsList;
