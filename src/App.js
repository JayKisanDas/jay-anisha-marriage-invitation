import React, { useState, useEffect } from "react";

import "./App.css";

import $ from "jquery";
import Carousel from "./components/Carousel";
import PhotoGallery from "./components/PhotoGallery";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Story from "./components/Story";
import Event from "./components/Event";
import FamilyList from "./components/FamilyList";
import Rsvp from "./components//InvitationForm/Rsvp";
import Footer from "./components/Footer";

import backgroundMusic from "./assets/audio/tenu-leke.mp3";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(backgroundMusic));
  }, []);

  // PLAY OR PAUSE OF THE BACKGROUND MUSIC
  const handleButtonClick = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // NAVBAR ON SCROLLING
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".navbar").fadeIn("slow").css("display", "flex");
      $(".back-to-top").fadeIn("slow").css("display", "inline");
    } else {
      $(".navbar").fadeOut("slow").css("display", "none");
      $(".back-to-top").fadeOut("slow").css("display", "none");
    }

    if ($(this).scrollTop() > 100) {
      $(".scroll-to-bottom").fadeOut("slow");
    } else {
      $(".scroll-to-bottom").fadeIn("slow");
    }
  });

  // SCROLL TO TOP
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SCROLL TO ABOUT SECTION
  const scrollToBottomHandler = () => {
    document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // PAUSE BACKGROUND MUSIC WHEN CLICK ON YOUTUBE VIDEO MODAL
  const handlePauseMusic = (data) => {
    setIsPlaying(!data);
    audio.pause();
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Carousel isPlaying={isPlaying} pauseBackgroundMusic={handlePauseMusic} />

      {/* About */}
      <About />

      {/* Floating Background Music */}
      <div className="background-music-container">
        <button className="floating-button" onClick={handleButtonClick}>
          <i className={isPlaying ? "fa fa-pause" : "fa fa-play"}></i>
        </button>
        {isPlaying && (
          <style>
            {`.floating-button::before {
              animation: none !important;
              background: transparent !important;
            }`}
          </style>
        )}
      </div>

      {/* Story */}
      <Story />

      {/* Gallery */}
      <PhotoGallery />

      {/* Event */}
      <Event />

      {/* Friends & Family */}
      <FamilyList />

      {/* RSVP */}
      <Rsvp />

      {/* Footer */}
      <Footer />

      {/* Scroll to Bottom */}
      <i
        onClick={scrollToBottomHandler}
        className="fa fa-2x fa-angle-down text-white scroll-to-bottom"
      ></i>

      {/* Back to Top */}
      <button
        className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
        onClick={scrollToTopHandler}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </div>
  );
};

export default App;
