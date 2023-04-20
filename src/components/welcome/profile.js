import React from "react";

import "./profile.css";

import Imagen from "../../assests/images/Diego.jpg";

import "./welcome.css";
function Profile() {
  return (
    <div className="profileContent">
      <div className="textProfileContent">
        <h1>HI! I'm Diego! Nice to meet you here!</h1> I am Diego, I was born in
        Argentina, in a province called Chaco. In the year 2021 I started
        studying web programming and English! In such a way that everything you
        will see on this website will be knowledge that I acquired approximately
        one year of hard work and effort!.
        <div>
          I am very enthusiastic about the world of programming since every day
          I learn something new. Although my experience is still very short, I
          hope you enjoy browsing my website, you will be able to observe the
          projects in which I was involved, from the newest to the oldest!{" "}
        </div>
        <div>Enjoy the trip!.</div>
      </div>
      <img
        className="imagenProfile"
        src={Imagen}
        alt="Diego Dimitroff Petocff"
      />
    </div>
  );
}

export default Profile;
