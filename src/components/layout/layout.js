import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./profile.css";

import "./welcome.css";

function Layout() {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div id="welcome">
      <h3 data-aos="flip-down">Welcome to my portfolio!</h3>
      <h1 data-aos="flip-down">DIEGO DIMITROFF PETCOFF</h1>
    </div>
  );
}

export default Layout;
