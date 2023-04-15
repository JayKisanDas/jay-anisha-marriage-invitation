import React, { useState, useEffect } from "react";

import YoutubeModal from "./YoutubeModal";
import carousel1 from "../assets/images/carousel-1.jpg";
import carousel2 from "../assets/images/carousel-2.jpg";
import "./Carousel.css";

const Carousel = ({ isPlaying, pauseBackgroundMusic }) => {
  const [defaultImg, setDefaultImg] = useState(carousel1);

  const carouselControlHandler = () => {
    defaultImg === carousel1
      ? setDefaultImg(carousel2)
      : setDefaultImg(carousel1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselControlHandler();
    }, 5000);
    return () => clearInterval(interval);
  });

  // PAUSE BACKGROUND MUSIC PROP PASSED FROM Youtube.js
  const handlePauseMusic = (data) => {
    pauseBackgroundMusic(data); // PAUSE BACKGROUND MUSIC PROP PASSED TO App.js
  };

  return (
    <div className="container-fluid p-0 mb-5 pb-5" id="home">
      <div className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div
            className="carousel-item position-relative active"
            style={{ height: "100vh", minHeight: "400px" }}
          >
            <img
              className="position-absolute w-100 h-100"
              src={defaultImg}
              alt="carousel-1.jpg"
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
                <YoutubeModal
                  isPlaying={isPlaying}
                  pauseBackgroundMusic={handlePauseMusic}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev justify-content-start"
          onClick={carouselControlHandler}
        >
          <div
            className="btn btn-primary px-0"
            style={{ width: "68px", height: "68px" }}
          >
            <span className="carousel-control-prev-icon mt-3"></span>
          </div>
        </button>
        <button
          className="carousel-control-next justify-content-end"
          onClick={carouselControlHandler}
        >
          <div
            className="btn btn-primary px-0"
            style={{ width: "68px", height: "68px" }}
          >
            <span className="carousel-control-next-icon mt-3"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
