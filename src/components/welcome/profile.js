import React, { useEffect } from "react";

import "./profile.css";

import Imagen from "../../assests/images/Diego.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import "./welcome.css";
function Profile() {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, [])
  return (
    <div className="profileContent">
      <div data-aos="fade-right" className="textProfileContent">
        <h1>How I am</h1> I am Diego, I was born in
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
        data-aos="fade-left"
        className="imagenProfile"
        src={Imagen}
        alt="Diego Dimitroff Petocff"
      />
    </div>
  );
}

export default Profile;
