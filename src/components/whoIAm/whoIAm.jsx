import React from "react";
import imgTeacher from "../../assests/images/whoIam-teaching.jpg";
import imgGym from "../../assests/images/diegodimitroffGym.jpg";

const WhoIAm = () => {
  return (
    <section className="gralContent">
      <div className="gralContentHeader">
        <h1 className="gralTitle">Who I Am?</h1>
        <h2 className="gralSubtitle">About Me - Diego Dimitroff Petcoff</h2>
        <h3 className="gralSubtitle">(This section is under construction)</h3>
      </div>

      <article class="contentSection">
        <section className="sectionWhoIam">
          <p className="paragraphWhoIam">
            <div>
              A lifetime before programming! Hi! I'm Diego Dimitroff Petcoff.
              I'm 34 years old and I was born in the city of Resistencia, Chaco,
              Argentina. After finishing high school, I started studying Law in
              the city of Corrientes, Argentina. In 2014, I graduated as a
              lawyer and started practicing the profession.
            </div>
            <div>
              I could say I spent almost a century dedicating myself to the
              legal profession. I taught classes at the Popular University of
              Resistencia on traffic laws. I had the opportunity to travel
              throughout the province of Chaco giving classes on criminal and
              civil liability to tertiary level teachers. I started practicing
              law independently in Resistencia and had the privilege of teaching
              many junior lawyers about the world of law. But I didn't just
              focus on law!
            </div>
          </p>
          <img
            src={imgTeacher}
            className="imgWhoIam"
            alt="Diego Dimitroff As a Lowyer in Resistencia Chaco"
          />
        </section>
        <section className="sectionWhoIam">
          <img
            src={imgGym}
            className="imgWhoIam"
            style={{ width: "300px" }}
            alt="Diego Dimitroff Actitud Funcional Gym"
          />

          <p className="paragraphWhoIam">
            During that period, I started a personal business unrelated to law,
            which operated until the end of 2023: ACTITUD FUNCIONAL GYM, is one
            of my great accomplishments. I was responsible for administration,
            human resources acquisitions, events, and network management! That's
            right! I could say I was fortunate to gain enough experience in
            teamwork, leading a group, and knowing how to manage it!
          </p>
        </section>
        <section className="sectionWhoIam">
          <p>
            My beginnings in the world of programming. In the year 2020, amidst
            a global pandemic, I made a drastic change in my career and life. I
            obtained a "Work & Holidays" visa in Sweden and stayed there for
            about a year and three months! This experience allowed me to learn
            English, make new friends, and explore the world. During that time,
            I made a friend who worked in the testing area, and that idea
            resonated with me. A few days later, I discovered how and where to
            start studying programming, and I did it without hesitation!
          </p>
          <p>
            As you can see, my philosophy of life is a bit extreme! I'm aware of
            what I want, and I never stop fighting for my dreams! That's how I
            managed to intern in the web analytics area at a Swedish company
            called Aumla. Although it was only for a few months, it helped me
            immerse myself in that world. Meanwhile, I studied, worked, traveled
            the world, and learned! The web programming career I embarked on
            consisted of separate studies in FRONTEND and BACKEND.
          </p>
          <p>
            With these resources in hand, I began an internship at NO COUNTRY in
            July of this year (2022), which lasted 5 months, where I had the
            opportunity to work in a team of four programmers (all juniors like
            myself). I worked on the Backend, creating an API Res with Node.js.
            The purpose of this internship is to bring junior programmers closer
            to their first job in IT, and for this purpose, it selects profiles
            with the best performance. This internship gave me the opportunity
            to gain experience in a real work environment!
          </p>
        </section>
        <section className="sectionWhoIam" style={{ flexDirection: "column" }}>
          <p>
            My journey into the realm of technology led me to specialize in Full
            Stack Development, where I've immersed myself in crafting robust
            solutions tailored to meet the unique needs of clients. Leveraging
            frameworks like Node.js, Express.js, and Nest.js for backend
            development, coupled with technologies like React.js for frontend,
            I've spearheaded numerous projects from conception to execution. In
            my current role as a Freelance Developer, I'm deeply engaged in
            developing an application for INDIRE, a Portuguese company, where I
            oversee the entire development lifecycle—from frontend and backend
            development to deployment, maintenance, and testing. My proficiency
            extends to database management, with a preference for MongoDB while
            also being adept in SQL. Throughout my career, I've embraced
            continuous learning, exploring cutting-edge technologies such as
            Progressive Web Apps (PWA) and integrating services like Microsoft
            Graph to enhance application functionality. I'm passionate about
            staying at the forefront of industry trends and methodologies, which
            is reflected in my commitment to ongoing professional development.
            Thank you for taking the time to learn about my journey!
          </p>
          <p>Thank you for reading!</p>
        </section>
      </article>
    </section>
  );
};

export default WhoIAm;
