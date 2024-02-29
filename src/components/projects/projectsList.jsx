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
        <Card
          style={{ width: "18rem", margin: "5px", maxHeight: "400px" }}
          data-aos="flip-left"
          key={index}
        >
          <Card.Img
            variant="top"
            style={{ minHeight: "150px" }}
            src={require(`../../assests/images/${project.Img}`)}
          />
          <Card.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Card.Title>{project.title}</Card.Title>

              {project.GitHubLinkFront ? (
                <Link target="_blank" to={project.GitHubLinkFront}>
                  <FaGithub />
                </Link>
              ) : null}

              {project.GitHubLinkBack ? (
                <Link target="_blank" to={project.GitHubLinkBack}>
                  <IoServerOutline />
                </Link>
              ) : null}
              {project.DeployLink ? (
                <Link target="_blank" to={project.DeployLink}>
                  <FaReact />
                </Link>
              ) : null}
            </div>
            <Card.Text
              style={{
                overflow: "auto",
                textOverflow: "ellipsis",
                width: "auto",
              }}
            >
              {project.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default ProjectsList;
