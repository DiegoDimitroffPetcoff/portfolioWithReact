import React from "react";
import Imagen from "../../../assests/images/7.png"

function Article2() {
  return (
    <div className="card">
    <img className="imagenArticle" src={Imagen} alt="Ecommerce Project"/>
      <h2 className="cardTitle">Title</h2>
      <span className="cardText"> TEXTO descriptivo</span>
    </div>
  );
}

export default Article2;
