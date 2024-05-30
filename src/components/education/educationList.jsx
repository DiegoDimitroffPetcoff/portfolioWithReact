import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal"; // Agrega la importación para el modal
import projects from "./educationList.json";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoServerOutline } from "react-icons/io5";

const EducationList = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (imageSrc) => {
    console.log(imageSrc);
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  return (
    <article className="contentSection">
      {projects.map((project, index) => (
        <Card
          style={{ width: "18rem", margin: "5px", maxHeight: "400px" }}
          data-aos="flip-left"
          key={index}
          onClick={() => handleCardClick(project.Img)} // Cambiado para llamar a la función handleCardClick
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
              {project.GitHubLinkFront && (
                <Link target="_blank" to={project.GitHubLinkFront}>
                  <FaGithub />
                </Link>
              )}
              {project.GitHubLinkBack && (
                <Link target="_blank" to={project.GitHubLinkBack}>
                  <IoServerOutline />
                </Link>
              )}
              {project.DeployLink && (
                <Link target="_blank" to={project.DeployLink}>
                  <FaReact />
                </Link>
              )}
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

      <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`certificates/${selectedImage}`}
            alt="Imagen seleccionada"
            style={{ width: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </article>
  );
};

export default EducationList;
