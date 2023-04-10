import $ from "jquery";
import { Link } from "react-scroll";

const Navbar = () => {
  // TOGGLE MENU ON BUTTON CLICK
  const toggleNavbarHandler = () => {
    $("#navbarCollapse").toggleClass("show");
  };

  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand d-block d-lg-none">
        <h1 className="font-secondary text-white mb-n2">
          Jay <span className="text-primary">&</span> Anisha
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        onClick={toggleNavbarHandler}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div className="navbar-nav ml-auto py-0">
          <Link
            className="nav-item nav-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Home
          </Link>
          <Link
            className="nav-item nav-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            About
          </Link>
          <Link
            className="nav-item nav-link"
            activeClass="active"
            to="story"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Story
          </Link>
          <Link
            className="nav-item nav-link"
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Gallery
          </Link>
        </div>
        <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
          <h1 className="font-secondary text-white mb-n2">
            Jay <span className="text-primary">&</span> Anisha
          </h1>
        </a>
        <div className="navbar-nav mr-auto py-0">
          <Link
            className="nav-item nav-link"
            activeClass="active"
            to="event"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Event
          </Link>
          <Link
            className="nav-item nav-link"
            activeClass="active"
            to="family"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Family
          </Link>
          <Link
            className="nav-item nav-link"
            activeClass="active"
            to="rsvp"
            spy={true}
            smooth={true}
            duration={1000}
          >
            RSVP
          </Link>
          <Link
            className="nav-item nav-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
