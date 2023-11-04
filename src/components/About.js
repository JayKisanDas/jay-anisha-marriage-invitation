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
          <h1 className="font-secondary display-4">🤵🏻 Groom & Bride 👰🏻</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
          <div className="col-md-6 p-0 text-center text-md-right">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
              <h3 className="mb-3">The Groom</h3>
              <p>
                🌟 Today is the pinnacle of my life's happiness! Her love makes
                me feel cherished, supported, and deeply loved. The way her eyes
                brighten upon seeing me, and how effortlessly she brings
                laughter into my life, is simply incredible. Excited to journey
                through life together, creating a family and weaving a future
                filled with love, laughter, and thrilling adventures! 👫💖🏡✨
              </p>
              <h3 className="font-secondary font-weight-normal text-muted mb-3">
                <i className="fa fa-male text-primary pr-3"></i>Jay
              </h3>
              <div className="position-relative">
                <a
                  className="btn btn-outline-primary btn-square mr-1"
                  href="https://twitter.com/JayDas97"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square mr-1"
                  href="https://www.linkedin.com/in/jay-kisan-das/"
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
                👰🏻💍 Being titled "The Happiest Bride" of 2023 is a dream I've
                nurtured since 2011, and it's finally coming true. The journey
                with Jay has been a rollercoaster of highs and lows, but it's
                forged an unbreakable bond between us. Our families' unwavering
                support is priceless, even amidst the drama it brings. I eagerly
                anticipate the moment Jay stands before me as my groom. The
                whirlwind of emotions I'm experiencing is beyond words, and I'm
                counting down the moments to our wedding day! 🎉💕🤵🏻
              </p>
              <h3 className="font-secondary font-weight-normal text-muted mb-3">
                <i className="fa fa-female text-primary pr-3"></i>Anisha
              </h3>
              <div className="position-relative">
                <a
                  className="btn btn-outline-primary btn-square mr-1"
                  href="https://www.linkedin.com/in/anisha-raut-877b54126/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square"
                  href="https://www.instagram.com/__.jkd_girl.__/"
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
