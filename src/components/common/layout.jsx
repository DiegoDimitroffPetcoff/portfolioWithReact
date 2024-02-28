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
        <section className="articleLayoutLeft">
          <Outlet />
        </section>
        <section className="articleLayoutRight">
          <img
            src={DiegoProfile}
            className="imgProfile"
            alt="Diego Dimitroff Profile"
          />
        </section>
      </header>
    </div>
  );
};
export default Layout;
