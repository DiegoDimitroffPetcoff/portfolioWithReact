import { Link } from "react-router-dom";
import LogoTransparent from "../../assests/images/logo-transparent-white.png";
import { useState } from "react";
const NavBar = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);
  return (
    <nav className="nav">
      <ul className={`ulLinks${navBarVisible ? "Visible" : ""}`}>
        <Link
          className="linkNavBar"
          to="/"
          onClick={() => {
            setNavBarVisible(false);
          }}
        >
          Home
        </Link>
        <Link
          className="linkNavBar"
          to="/projects"
          onClick={() => {
            setNavBarVisible(false);
          }}
        >
          Projects
        </Link>
        <Link
          className="linkNavBar"
          to="/WorkingOnPage"
          onClick={() => {
            setNavBarVisible(false);
          }}
        >
          Blog
        </Link>
        <Link
          className="linkNavBar"
          to="/WorkingOnPage"
          onClick={() => {
            setNavBarVisible(false);
          }}
        >
          Articles
        </Link>
        <Link
          className="linkNavBar"
          to="/WorkingOnPage"
          onClick={() => {
            setNavBarVisible(false);
          }}
        >
          Who I am?
        </Link>
      </ul>
      <Link
        className="linkNavBar"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={LogoTransparent}
          alt="Logo Diego Dimitrogg"
          className="navLogo"
          onClick={() => {
            setNavBarVisible(!navBarVisible);
          }}
        />
      </Link>
    </nav>
  );
};
export default NavBar;
