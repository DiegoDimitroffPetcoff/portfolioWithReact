import { Link } from "react-router-dom";
import LogoTransparent from "../../assests/images/logo-transparent-white.png";
import { useState } from "react";
const NavBar = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);
  return (
    <nav className="nav">
      <ul className={`ulLinks${navBarVisible ? "Visible" : ""}`}>
        <Link className="linkNavBar" to="/projects">
          Projects
        </Link>
        <Link className="linkNavBar" to="/projects">
          Blog
        </Link>
        <Link className="linkNavBar" to="/projects">
          Articles
        </Link>
        <Link className="linkNavBar" to="/projects">
          Who I am?
        </Link>
      </ul>
      <img
        src={LogoTransparent}
        alt="Logo Diego Dimitrogg"
        className="navLogo"
        onClick={() => {
          setNavBarVisible(!navBarVisible);
        }}
      />
    </nav>
  );
};
export default NavBar;
