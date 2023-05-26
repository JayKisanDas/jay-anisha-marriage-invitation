import "./About.css";

import about1 from "../assets/images/about-1.jpg";
import about2 from "../assets/images/about-2.jpg";

const About = () => {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            About
          </h6>
          <h1 className="font-secondary display-4">Groom & Bride</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
          <div className="col-md-6 p-0 text-center text-md-right">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
              <h3 className="mb-3">The Groom</h3>
              <p>
                I have manifested this day as the best day of my life. I love
                the way she makes me feel loved, cherished, and supported. I
                love the way her eyes light up when she sees me, and the way she
                always knows how to make me laugh. I can't wait to grow old with
                her and create a family together. We will build a life full of
                love, laughter, and adventure.
              </p>
              <h3 className="font-secondary font-weight-normal text-muted mb-3">
                <i className="fa fa-male text-primary pr-3"></i>Jay
              </h3>
              <div className="position-relative">
                <a
                  className="btn btn-outline-primary btn-square mr-1"
                  href="https://twitter.com/JayRomeojay67"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square mr-1"
                  href="https://www.linkedin.com/in/jay-das-675046131/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square"
                  href="https://www.instagram.com/the_avtar_jay/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0" style={{ minHeight: "400px" }}>
            <img
              className="position-absolute w-100 h-100"
              src={about1}
              alt="Jay Pic"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-6 p-0" style={{ minHeight: "400px" }}>
            <img
              className="position-absolute w-100 h-100"
              src={about2}
              alt="Anisha Pic"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 p-0 text-center text-md-left">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
              <h3 className="mb-3">The Bride</h3>
              <p>
                I am "The Happiest Bride" of 2023 and my dream from 2011 is
                about to come true. It has been a journey of ups and downs with
                Jay, but we have grown stronger together. The support of our
                families is invaluable, although it does come with its fair
                share of drama. I can't wait to see Jay standing before me as my
                groom. The mix of emotions I'm feeling is indescribable, and I
                can't wait for our wedding day.
              </p>
              <h3 className="font-secondary font-weight-normal text-muted mb-3">
                <i className="fa fa-female text-primary pr-3"></i>Anisha
              </h3>
              <div className="position-relative">
                <a
                  className="btn btn-outline-primary btn-square mr-1"
                  href="https://www.instagram.com/the_avtar_jay/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square mr-1"
                  href="https://www.linkedin.com/in/jay-das-675046131/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square"
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
  );
};

export default About;
