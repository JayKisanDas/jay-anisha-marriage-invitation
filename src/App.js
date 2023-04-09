/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./App.css";

import about1 from "./assets/images/about-1.jpg";
import about2 from "./assets/images/about-2.jpg";
import bridesmaid1 from "./assets/images/bridesmaid-1.jpg";
import bridesmaid2 from "./assets/images/bridesmaid-2.jpg";
import bridesmaid3 from "./assets/images/bridesmaid-3.jpg";
import carousel1 from "./assets/images/carousel-1.jpg";
import carousel2 from "./assets/images/carousel-2.jpg";
import event1 from "./assets/images/event-1.jpg";
import event2 from "./assets/images/event-2.jpg";
import gallery1 from "./assets/images/gallery-1.jpg";
import gallery2 from "./assets/images/gallery-2.jpg";
import gallery3 from "./assets/images/gallery-3.jpg";
import gallery4 from "./assets/images/gallery-4.jpg";
import gallery5 from "./assets/images/gallery-5.jpg";
import gallery6 from "./assets/images/gallery-6.jpg";
import groomsmen1 from "./assets/images/groomsmen-1.jpg";
import groomsmen2 from "./assets/images/groomsmen-2.jpg";
import groomsmen3 from "./assets/images/groomsmen-3.jpg";
import story1 from "./assets/images/story-1.jpg";
import story2 from "./assets/images/story-2.jpg";
import story3 from "./assets/images/story-3.jpg";
import story4 from "./assets/images/story-4.jpg";

// import VideoModal from "./components/VideoModal/VideoModal";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar Start */}
      <nav
        className={`navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5 ${
          scrollPosition > 200 ? "fadeIn" : "fadeOut"
        }`}
      >
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="font-secondary text-white mb-n2">
            Jay <span className="text-primary">&</span> Anisha
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto py-0">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#story" className="nav-item nav-link">
              Story
            </a>
            <a href="#gallery" className="nav-item nav-link">
              Gallery
            </a>
          </div>
          <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
            <h1 className="font-secondary text-white mb-n2">
              Jay <span className="text-primary">&</span> Anisha
            </h1>
          </a>
          <div className="navbar-nav mr-auto py-0">
            <a href="#family" className="nav-item nav-link">
              Family
            </a>
            <a href="#event" className="nav-item nav-link">
              Event
            </a>
            <a href="#rsvp" className="nav-item nav-link">
              RSVP
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5 pb-5" id="home">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item position-relative active"
              style={{ height: "100vh", minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={carousel1}
                alt="carousel-1.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                    Anisha & Jay
                  </h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3
                      className="text-uppercase font-weight-normal text-white m-0"
                      style={{ letterSpacing: "2px" }}
                    >
                      We're getting married
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="btn-play mx-auto"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-target="#videoModal"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ height: "100vh", minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={carousel2}
                alt="carousel-2.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                    Jay & Anisha
                  </h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3
                      className="text-uppercase font-weight-normal text-white m-0"
                      style={{ letterSpacing: "2px" }}
                    >
                      We're getting married
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="btn-play mx-auto"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-target="#videoModal"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev justify-content-start"
            href="#header-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-primary px-0"
              style={{ width: "68px", height: "68px" }}
            >
              <span className="carousel-control-prev-icon mt-3"></span>
            </div>
          </a>
          <a
            className="carousel-control-next justify-content-end"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-primary px-0"
              style={{ width: "68px", height: "68px" }}
            >
              <span className="carousel-control-next-icon mt-3"></span>
            </div>
          </a>
        </div>
      </div>
      {/* Carousel End */}

      {/* Video Modal Start */}
      <div
        className="modal fade"
        id="videoModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {/* 16:9 aspect ratio */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  title="responsive-item"
                  id="video"
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}

      {/* About Start */}
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
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
                <h3 className="font-secondary font-weight-normal text-muted mb-3">
                  <i className="fa fa-male text-primary pr-3"></i>Jay
                </h3>
                <div className="position-relative">
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square" href="#">
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
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
                <h3 className="font-secondary font-weight-normal text-muted mb-3">
                  <i className="fa fa-female text-primary pr-3"></i>Anisha
                </h3>
                <div className="position-relative">
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Story Start */}
      <div className="container-fluid py-5" id="story">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: "3px" }}
            >
              Story
            </h6>
            <h1 className="font-secondary display-4">Our Love Story</h1>
            {/* <VideoModal
              title="My Modal"
              content="This is the content of my modal."
            /> */}
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="container timeline position-relative p-0">
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <img className="img-fluid mr-md-3" src={story1} alt="" />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                  <h4 className="mb-2">First Meet</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">
                    Lorem elitr magna stet rebum dolores sed. Est stet labore
                    est lorem lorem at amet sea, eos tempor rebum, labore amet
                    ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                    stet amet est dolor elitr.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                  <h4 className="mb-2">First Date</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">
                    Lorem elitr magna stet rebum dolores sed. Est stet labore
                    est lorem lorem at amet sea, eos tempor rebum, labore amet
                    ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                    stet amet est dolor elitr.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <img className="img-fluid ml-md-3" src={story2} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <img className="img-fluid mr-md-3" src={story3} alt="" />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                  <h4 className="mb-2">Proposal</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">
                    Lorem elitr magna stet rebum dolores sed. Est stet labore
                    est lorem lorem at amet sea, eos tempor rebum, labore amet
                    ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                    stet amet est dolor elitr.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                  <h4 className="mb-2">Enagagement</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">
                    Lorem elitr magna stet rebum dolores sed. Est stet labore
                    est lorem lorem at amet sea, eos tempor rebum, labore amet
                    ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                    stet amet est dolor elitr.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <img className="img-fluid ml-md-3" src={story4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Story End */}

      {/* Gallery Start */}
      <div
        className="container-fluid bg-gallery"
        id="gallery"
        style={{ padding: "120px 0", margin: "90px 0" }}
      >
        <div
          className="section-title position-relative text-center"
          style={{ marginBottom: "120px" }}
        >
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Gallery
          </h6>
          <h1 className="font-secondary display-4 text-white">
            Our Photo Gallery
          </h1>
          <i className="far fa-heart text-white"></i>
        </div>
        <div className="owl-carousel gallery-carousel">
          <div className="gallery-item">
            <img className="img-fluid w-100" src={gallery1} alt="" />
            <a href="img/gallery-1.jpg" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={gallery2} alt="" />
            <a href="img/gallery-2.jpg" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={gallery3} alt="" />
            <a href="img/gallery-3.jpg" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={gallery4} alt="" />
            <a href="img/gallery-4.jpg" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={gallery5} alt="" />
            <a href="img/gallery-5.jpg" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={gallery6} alt="" />
            <a href="img/gallery-6.jpg" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Gallery End */}

      {/* Event Start */}
      <div className="container-fluid py-5" id="event">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: "3px" }}
            >
              Event
            </h6>
            <h1 className="font-secondary display-4">Our Wedding Event</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h5 className="font-weight-normal text-muted mb-3 pb-3">
                Clita ipsum aliquyam dolor diam dolores elitr nonumy. Rebum sea
                vero ipsum eirmod tempor kasd. Diam amet lorem erat eos sit
                lorem elitr justo
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 border-right border-primary">
              <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                <img className="img-fluid mb-4" src={event1} alt="" />
                <h4 className="mb-3">The Reception</h4>
                <p className="mb-2">123 Street, New York, USA</p>
                <p className="mb-0">12:00AM - 13:00PM</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-left ml-md-3">
                <img className="img-fluid mb-4" src={event2} alt="" />
                <h4 className="mb-3">Wedding Party</h4>
                <p className="mb-2">123 Street, New York, USA</p>
                <p className="mb-0">12:00AM - 13:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Event End */}

      {/* Friends & Family Start */}
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
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
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
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
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
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
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
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
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
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
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
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Friends & Family End */}

      {/* RSVP Start */}
      <div className="container-fluid py-5" id="rsvp">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: "3px" }}
            >
              RSVP
            </h6>
            <h1 className="font-secondary display-4">Join Our Party</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <form>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-secondary border-0 py-4 px-3"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-secondary border-0 py-4 px-3"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control bg-secondary border-0"
                        style={{ height: "52px" }}
                      >
                        <option>Number of Guest</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control bg-secondary border-0"
                        style={{ height: "52px" }}
                      >
                        <option>I'm Attending</option>
                        <option>All Events</option>
                        <option>Wedding Party</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control bg-secondary border-0 py-2 px-3"
                      rows="5"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary font-weight-bold py-3 px-5"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RSVP End */}

      {/* Footer Start */}
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
              href="#"
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
            <a className="btn btn-lg btn-outline-light btn-lg-square" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="d-flex justify-content-center py-2">
            <p className="text-white" href="#">
              info@example.com
            </p>
            <span className="px-3">|</span>
            <p className="text-white" href="#">
              +012 345 6789
            </p>
          </div>
          <p className="m-0">
            &copy;{" "}
            <a className="text-primary" href="#">
              Domain Name
            </a>
            . Designed by
            <a className="text-primary" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </p>
        </div>
      </div>
      {/* Footer End */}

      {/* Scroll to Bottom */}
      <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};

export default App;
