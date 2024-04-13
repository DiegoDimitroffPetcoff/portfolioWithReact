import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import CvButton from "./CvButtons/cvButton";

const Profile = () => {
  return (
    <div className="contentProfile">
      <header>
        <h1 data-aos="fade-right">Diego Dimitroff Petcoff</h1>
      </header>

      <nav>
        <CvButton />

        <Link
          className="linkProfile"
          to="https://github.com/DiegoDimitroffPetcoff"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <AiFillGithub size={40} />
        </Link>
        <Link
          className="linkProfile"
          to="https://www.linkedin.com/in/diegodimitroffpetcoff/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Profile"
        >
          <AiOutlineLinkedin size={40} />
        </Link>

        <a
          className="linkProfile"
          href="tel:+46769681000"
          aria-label="Call to Diego Dimitroff Petcoff's phone"
        >
          <AiFillPhone size={40} />
        </a>
        <a
          className="linkProfile"
          href="mailto:diegodimitroffpetcoff@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email to Diego Dimitroff Petcoff"
        >
          <AiOutlineMail size={40} />
        </a>
      </nav>
    </div>
  );
};

export default Profile;
