import NavBar from "./navBar";
import "../../global.css";
import DiegoProfile from "../../assests/images/diego.png";

const Layout = () => {
  return (
    <div className="contentLayout">
      <nav>
        <NavBar />
      </nav>
      <header className="sectionLayout">
        <section className="articleLayoutLeft">
          <div className="lineContent">
            <h1>Diego Dimitroff Petcoff</h1>
          </div>
          <button className="buttonContent">Contact</button>
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
