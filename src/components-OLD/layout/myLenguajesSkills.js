import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import "./myExperience.css";
import "./welcome.css";

import Imagen from "../../assests/images/6.png";

function MyLenguajesSkills() {
  return (
    <div className="profileContent">
      <img data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="imagenMySkills"
        src={Imagen}
        alt="Diego Dimitroff Petocff Experience"
      />
      <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="textProfileContent">
        <h1> About my language skills</h1>
        <div>My mother tongue is Spanish, but I am able to speak English fluently
          both in reading, writing and speaking! I am currently learning
          Portuguese!.</div>
        <Link
          to="https://www.efset.org/cert/rumCYA"
          className="linksMyExperience rigth"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Certificate {" "}
        </Link>
      </div>

    </div>
  );
}

export default MyLenguajesSkills;
