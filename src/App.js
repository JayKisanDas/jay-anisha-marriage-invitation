import "./App.css";

import $ from "jquery";
import Carousel from "./components/Carousel";
import PhotoGallery from "./components/PhotoGallery";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Story from "./components/Story";
import Event from "./components/Event";
import FriendsAndFamily from "./components/FriendsAndFamily";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

const App = () => {
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

  // SCROLL TO BOTTOM
  const scrollToBottomHandler = () => {
    // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* About */}
      <About />

      {/* Story */}
      <Story />

      {/* Gallery */}
      <PhotoGallery />

      {/* Event */}
      <Event />

      {/* Friends & Family */}
      <FriendsAndFamily />

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
