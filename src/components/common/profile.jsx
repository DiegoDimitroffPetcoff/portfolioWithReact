import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
const Profile = () => {
  return (
    <div className="contentProfile">
      <div className="lineContent">
        <h1 data-aos="fade-right">Diego Dimitroff Petcoff</h1>
      </div>

      <div>
        <Link
          className="linkProfile"
          to="https://github.com/DiegoDimitroffPetcoff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub></AiFillGithub>
        </Link>
        <Link
          className="linkProfile"
          to="https://www.linkedin.com/in/diegodimitroffpetcoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin></AiOutlineLinkedin>
        </Link>

        <a className="linkProfile" href="tel:+46769681000">
          <AiFillPhone></AiFillPhone>
        </a>

        <a
          className="linkProfile"
          href="mailto:diegodimitroffpetcoff@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail></AiOutlineMail>
        </a>
      </div>
    </div>
  );
};
export default Profile;
