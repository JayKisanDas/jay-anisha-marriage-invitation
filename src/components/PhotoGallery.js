/* eslint-disable jsx-a11y/anchor-is-valid */
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";

import "./PhotoGallery.css";

import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";

const PhotoGallery = () => {
  const carouselConfig = {
    0: { items: 1, nav: true },
    576: { items: 2, nav: true },
    768: { items: 3, nav: true },
    992: { items: 4, nav: true },
  };

  return (
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
        <OwlCarousel responsive={carouselConfig}>
          <div className="item gallery-item">
            <img className="img-fluid w-100" src={gallery1} alt="" />
            <a href="#" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="item gallery-item">
            <img className="img-fluid w-100" src={gallery2} alt="" />
            <a href="#" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="item gallery-item">
            <img className="img-fluid w-100" src={gallery3} alt="" />
            <a href="#" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="item gallery-item">
            <img className="img-fluid w-100" src={gallery4} alt="" />
            <a href="#" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="item gallery-item">
            <img className="img-fluid w-100" src={gallery5} alt="" />
            <a href="#" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
          <div className="item gallery-item">
            <img className="img-fluid w-100" src={gallery6} alt="" />
            <a href="#" data-lightbox="gallery">
              <i className="fa fa-2x fa-plus text-white"></i>
            </a>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default PhotoGallery;
