import React from "react";

import "./profile.css";
import "./myExperience.css";
import "./welcome.css";

import Imagen from "../../assests/images/6.png";

function MyLenguajesSkills() {
  return (
    <div className="profileContent">
          <img
        className="imagenMySkills"
        src={Imagen}
        alt="Diego Dimitroff Petocff Experience"
      />
      <div className="textProfileContent">
        <h1> About my language skills</h1>
        My mother tongue is Spanish, but I am able to speak English fluently
        both in reading, writing and speaking! I am currently learning
        Portuguese!.
      </div>

    </div>
  );
}

export default MyLenguajesSkills;
