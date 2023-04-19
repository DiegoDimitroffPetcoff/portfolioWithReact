import React from "react";
import Imagen from "../../../assests/images/9.png";

function Article5() {
  return (
    <div className="card">
      <img className="imagenArticle" src={Imagen} alt="Rock, Paper and scissors" />
      <h2 className="cardTitle">Rock, Paper and scissors Game</h2>
      <span className="cardText">
        This project presents an example of a Node.js server that uses Express.js
        to handle HTTP requests and provides a RESTful API for CRUD operations
        on a MongoDB database. The article explains the various components of
        the application, including middleware for processing JSON and form data,
        API routes associated with controllers, controllers handling HTTP
        requests, services interacting with the database, and the database
        connection itself. The provided code showcases how to use Node.js,
        Express.js, and MongoDB to create a backend application that can handle
        CRUD operations on a database.
      </span>
    </div>
  );
}

export default Article5;
