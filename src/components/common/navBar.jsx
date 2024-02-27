import LogoTransparent from "../../assests/images/logo-transparent.png";
const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="navLinks">
        <li>Projects</li>
        <li>Blog</li>
        <li>Articles</li>
        <li>Who I am?</li>
      </ul>
      <img src={LogoTransparent} alt="Logo Diego Dimitrogg" className="navLogo" />
    </nav>
  );
};
export default NavBar;
