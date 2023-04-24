import React from "react";
import Imagen from "../../assests/images/Diego.jpg";
import Nav from "../nav/nav";
import "./aboutme.css";
import Welcome from "../welcome/welcome";
function Aboutme() {
  return (
    <div>
      <Nav></Nav>
      <Welcome></Welcome>
      <div className="AboutmeContent">
        <h1 className="AboutMeTitle">About Me</h1>

        <div className="AboutmeColumn">
          <p className="AboutmeText">
            <div>A LIFETIME BEFORE PROGRAMMING! </div>
            Hi! I am Diego Dimitroff Petcoff. I am 33 years old and I was born
            in the city of Resistencia Chaco, Argentina. Upon graduating from
            high school I began to study Law in the city of Corrientes -
            Argentina. In 2014 I graduated as a lawyer and began to practice the
            profession. I could say that I spent almost a century dedicating
            myself to the legal profession! I gave classes at the Popular
            University of the city of Resistencia on traffic laws. I was able to
            tour the interior of the province of Chaco giving classes on
            criminal and civil liability to tertiary level teachers. I began
            practicing the profession in a liberal way in the city of
            Resistencia and I was lucky enough to teach many junior lawyers
            about the world of law. But I didn't just meddle in the law! During
            that period I started a personal business that had nothing to do
            with law, and that continues to work today! ACTITUD FUNCIONAL GYM,
            which has been in the city of Resistencia for years, is one of my
            great prides. I've been in charge of the administration, human
            resources acquisitions, events and network management! That's how it
            is! It could be said that I was lucky to acquire enough experience
            in teamwork, leading a group and knowing how to manage it (Currently
            it is being managed by my family since I am no longer living in
            Argentina).
            <div>MY BEGINNINGS IN THE WORLD OF PROGRAMMING</div>
            In the year 2020, in the midst of a global pandemic, I made the
            decision to make a resounding change in my career AND LIFE! I did a
            work & holiday visa in Sweden and I was there for about a year and
            three months! This experience allowed me to learn to speak English,
            make new friends and discover the world! At that time I made a
            friend who was in the testing work area, and that idea was
            resonating in my head. A few days later I found out how and where to
            start studying programming and I did it without hesitation! As you
            can see, my philosophy of life is a bit extreme! I am aware of what
            I want and I never stop Fighting for my dreams! Thus, it was that I
            managed to do an internship in Web analytics area in a Swedish
            company called Aumla. Although it was a few months, it helped me a
            lot to meddle a little in that world. Meanwhile all this, I studied,
            worked, traveled the world and learned! The web programming career I
            started consisted of separate FRONTEND and BACKEND studios. Already
            having these resources, I started an internship at NO COUNTRY in
            July of this year (2022), which lasted 5 months where I had the
            opportunity to work in a team of four programmers (all juniors just
            like me). I worked in Backend. The logic of this internship is to
            bring junior programmers closer to their first IT job, and for this
            purpose it selects the profiles that had the best performance. Me
            siento feliz de contarles que quede en el seleccionado de NO COUNTRY
            y actualmente me encuentro realizando esta segunda pasantía,
            obteniendo experiencia en un ambiente de trabajo real!!
          </p>
          <img className="AboutmeImage" src={Imagen} alt="Ecommerce Project" />
        </div>
   
      </div>
    </div>
  );
}

export default Aboutme;
