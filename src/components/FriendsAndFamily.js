import bridesmaid1 from "../assets/images/bridesmaid-1.jpg";
import bridesmaid2 from "../assets/images/bridesmaid-2.jpg";
import bridesmaid3 from "../assets/images/bridesmaid-3.jpg";
import groomsmen1 from "../assets/images/groomsmen-1.jpg";
import groomsmen2 from "../assets/images/groomsmen-2.jpg";
import groomsmen3 from "../assets/images/groomsmen-3.jpg";

const FriendsAndFamily = () => {
  return (
    <div className="container-fluid py-5" id="family">
      <div className="container pt-5 pb-3">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Friends & Family
          </h6>
          <h1 className="font-secondary display-4">Groomsmen & Bridesmaid</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li
                className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                data-filter=".first"
              >
                Groomsmen
              </li>
              <li
                className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                data-filter=".second"
              >
                Bridesmaid
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative mb-2">
              <img className="img-fluid w-100" src={groomsmen1} alt="" />
              <div className="bg-secondary text-center p-4">
                <h4 className="mb-3">Full Name</h4>
                <p className="text-uppercase">Best Friend</p>
                <div className="d-inline-block">
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://www.instagram.com/the_avtar_jay/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div className="position-relative mb-2">
              <img className="img-fluid w-100" src={bridesmaid1} alt="" />
              <div className="bg-secondary text-center p-4">
                <h4 className="mb-3">Full Name</h4>
                <p className="text-uppercase">Best Friend</p>
                <div className="d-inline-block">
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://www.instagram.com/the_avtar_jay/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative mb-2">
              <img className="img-fluid w-100" src={groomsmen2} alt="" />
              <div className="bg-secondary text-center p-4">
                <h4 className="mb-3">Full Name</h4>
                <p className="text-uppercase">Best Friend</p>
                <div className="d-inline-block">
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://www.instagram.com/the_avtar_jay/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div className="position-relative mb-2">
              <img className="img-fluid w-100" src={bridesmaid2} alt="" />
              <div className="bg-secondary text-center p-4">
                <h4 className="mb-3">Full Name</h4>
                <p className="text-uppercase">Best Friend</p>
                <div className="d-inline-block">
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://www.instagram.com/the_avtar_jay/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative mb-2">
              <img className="img-fluid w-100" src={groomsmen3} alt="" />
              <div className="bg-secondary text-center p-4">
                <h4 className="mb-3">Full Name</h4>
                <p className="text-uppercase">Best Friend</p>
                <div className="d-inline-block">
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://www.instagram.com/the_avtar_jay/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div className="position-relative mb-2">
              <img className="img-fluid w-100" src={bridesmaid3} alt="" />
              <div className="bg-secondary text-center p-4">
                <h4 className="mb-3">Full Name</h4>
                <p className="text-uppercase">Best Friend</p>
                <div className="d-inline-block">
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://twitter.com/JayRomeojay67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="mx-2"
                    href="https://www.instagram.com/the_avtar_jay/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsAndFamily;
