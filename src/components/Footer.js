/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-white py-5"
      id="contact"
      style={{ marginTop: "90px" }}
    >
      <div className="container text-center py-5">
        <div className="section-title position-relative text-center">
          <h1 className="font-secondary display-3 text-white">Thank You</h1>
          <i className="far fa-heart text-white"></i>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <a
            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
            href="https://twitter.com/JayRomeojay67"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
            href="#"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
            href="#"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="btn btn-lg btn-outline-light btn-lg-square"
            href="https://www.instagram.com/the_avtar_jay/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="d-flex justify-content-center py-2">
          <p className="text-white">
            <a
              style={{ textDecoration: "none" }}
              href="mailto:jaykisandas@gmail.com"
            >
              jaykisandas@gmail.com
            </a>
          </p>
          <span className="px-3">|</span>
          <p className="text-white">
            <a style={{ textDecoration: "none" }} href="tel:9556539279">
              +91 9556539279
            </a>
          </p>
        </div>
        <p className="m-0">
          &copy;{" "}
          {/* <a className="text-primary" href="#">
            Domain Name
          </a> */}
          . Designed by
          <a
            className="text-primary"
            href="https://www.instagram.com/the_avtar_jay/"
            target="_blank"
            rel="noreferrer"
          >
            Jay Kisan Das
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
