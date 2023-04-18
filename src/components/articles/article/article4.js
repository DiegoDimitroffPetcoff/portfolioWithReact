import React from "react";
import Imagen from "../../../assests/images/3.png"



function Article4() {
  return (
    <div className="card">
    
    <img className="imagenArticle" src={Imagen} alt="Ecommerce Project"/>
    <h2 className="cardTitle">Title</h2>
    <span className="cardText"> TEXTO descriptivo</span>
    </div>
  );
}

export default Article4;
