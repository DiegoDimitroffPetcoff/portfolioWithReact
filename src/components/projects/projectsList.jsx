import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import projects from "./projectList.json";

const ProjectsList = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", margin:"2%"}}>
      {projects.map((project, index) => (
        <div key={index}>
          <h1>{project.title}</h1>
          <img src={project.Img} alt="ima" />
          <p>{project.descriction}</p>

        </div>
      ))}
    </div>
  );
};
export default ProjectsList;
