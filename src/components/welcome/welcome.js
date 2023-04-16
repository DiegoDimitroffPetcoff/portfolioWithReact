import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./welcome.css"
function Welcome() {
  return (
    <div id="welcome">
    <h3>Welcome to my portfolio!</h3>
      <h1>DIEGO DIMITROFF PETCOFF</h1>
      <Link to="/projectlist">Check my CV</Link>
      <Link to="/projectlist">GitHub</Link>
      <Link to="/projectlist">Linkeding</Link>
      <Link to="/projectlist">Email</Link>
      <Link to="/projectlist">Cellphone</Link>
      
    </div>
  );
}

export default Welcome;
