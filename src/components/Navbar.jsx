import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-scroll";
import mario from "../assets/mario.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import message from "../assets/message.png";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      id="Nav"
      style={{ position: "sticky", top: "0", zIndex: "1" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="Hero" style={{ cursor: "pointer" }}>
          <img src={mario} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto">
            <ul className="navbar-nav">
              <Link
                className="nav-link"
                to="Hero"
                spy={true}
                smooth={true}
                duration={100}
                activeClass="active"
                offset={-50}
              >
                Home
              </Link>

              <Link
                className="nav-link"
                to="About"
                spy={true}
                smooth={true}
                duration={100}
                activeClass="active"
                offset={-50}
              >
                About
              </Link>

              <Link
                className="nav-link"
                to="Project"
                smooth={true}
                duration={100}
                activeClass="active"
                offset={60}
              >
                Projects
              </Link>

              <Link
                className="nav-link"
                to="Contact"
                spy={true}
                smooth={true}
                duration={100}
                activeClass="active"
                offset={-50}
              >
                Contact
              </Link>
            </ul>
          </div>

          <ul className="navbar-nav ms-auto gap-3 d-flex align-items-center">
            <a
              href="https://linkedin.com/in/jeevar151118"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" className="socialicons" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className="socialicons" />
            </a>
            <div className="d-flex align-items-center flex-column justify-content-center gap-2">
            <button className="btn btn-info text-white ">
              <a href="#Contact" >
              <img src={message} alt="" className="btnimage" />
              </a>
              Message me
            </button>

            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
