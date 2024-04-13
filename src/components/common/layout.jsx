import NavBar from "./navBar";
import "../../global.css";
import DiegoProfile from "../../assests/images/diego.png";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="contentLayout">
      <nav>
        <NavBar />
      </nav>

      <header className="sectionLayout">
        <Outlet />

        <img
          src={DiegoProfile}
          className="imgProfile"
          alt="Diego Dimitroff Profile"
        />
        <div></div>
      </header>

    </div>
  );
};
export default Layout;
