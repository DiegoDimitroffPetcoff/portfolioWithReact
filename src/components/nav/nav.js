import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillPhone,
  TbFileDownload,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import "./nav.css";

function NavBarComponent() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand id="icon" className="link">
          <Link className="link" to="/">
            D
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="link" to="/projectlist">
                Contacts
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/projectlist">
                Projects
              </Link>
            </Nav.Link>

            <NavDropdown title="More Info" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="link" to="/aboutme">
                  About Me
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/aboutme">
                  Blog
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/aboutMyStudies">
                  My Studies
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link className="link" to="/articlesList">
                  Some Articles
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignContent: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Link
                  className="linkContact"
                  to="https://github.com/DiegoDimitroffPetcoff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub></AiFillGithub>
                </Link>

                <Link
                  className="linkContact"
                  to="https://www.linkedin.com/in/diegodimitroffpetcoff/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLinkedin></AiOutlineLinkedin>
                </Link>

                <a className="linkContact" href="tel:+46769681000">
                  <AiFillPhone></AiFillPhone>
                </a>

                <a
                  className="linkContact"
                  href="mailto:diegodimitroffpetcoff@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail></AiOutlineMail>
                </a>
              </div>
            </NavDropdown>

            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: "center",
              }}
              className="linkContact"
              s
              href="./CV.pdf"
              target="_blank"
              download="CV-DiegoDimitroffPetcoff"
            >
              CV.
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
