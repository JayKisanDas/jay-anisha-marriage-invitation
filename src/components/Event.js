import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import event1 from "../assets/images/event-1.jpg";
import event2 from "../assets/images/event-2.jpg";

const Event = () => {
  const [isWidthMoreThan768, setIsWidthMoreThan768] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768
        ? setIsWidthMoreThan768(true)
        : setIsWidthMoreThan768(false);
      // setIsWidthMoreThan768(window.innerWidth >= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
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
              We are pleased to invite you to our wedding event. It is a great
              honor for us to have you join us on this special day to celebrate
              our love.
            </h5>
            <h5 className="font-weight-normal text-muted mb-3 pb-3">
              We kindly request that you fill the invitation form present below
              by <strong>01 Dec 2023</strong> so that we can finalize the guest
              list and ensure that all arrangements are made accordingly.
            </h5>
            <h5 className="font-weight-normal text-muted mb-3 pb-3">
              We are thrilled to have you join us on this joyous occasion, and
              we look forward to creating our unforgettable memories together.
            </h5>
          </div>
        </div>
        <div className="row">
          {/* WEDDING PARTY */}
          <div className="col-md-6 border-right border-primary">
            <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
              <img className="img-fluid mb-4" src={event1} alt="" />
              <h4 className="mb-3">Wedding Party</h4>
              <p className="mb-2">
                {!isWidthMoreThan768 && (
                  <FontAwesomeIcon icon={faCalendarDay} />
                )}
                &nbsp; 06th December 2023 &nbsp;
                {isWidthMoreThan768 && <FontAwesomeIcon icon={faCalendarDay} />}
              </p>
              <p className="mb-2">
                {!isWidthMoreThan768 && (
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                )}
                <a
                  target="_blank"
                  href="https://goo.gl/maps/mWbFRoFbjoE31TwK6"
                  rel="noreferrer"
                >
                  &nbsp; S3 LAWN, Ambapua Rd., Near Kali Temple, Bima Nagar,
                  Brahmapur, Odisha 760010 &nbsp;
                </a>
                {isWidthMoreThan768 && (
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                )}
              </p>
              <p className="mb-0">
                {!isWidthMoreThan768 && <FontAwesomeIcon icon={faClock} />}
                &nbsp; 07:00PM - 10:00PM &nbsp;
                {isWidthMoreThan768 && <FontAwesomeIcon icon={faClock} />}
              </p>
            </div>
          </div>
          {/* THE RECEPTION */}
          <div className="col-md-6">
            <div className="text-center text-md-left ml-md-3">
              <img
                className="img-fluid mb-4"
                style={{ width: "300px" }}
                src={event2}
                alt=""
              />
              <h4 className="mb-3">The Reception</h4>
              <p className="mb-2">
                <FontAwesomeIcon icon={faCalendarDay} />
                &nbsp; 09th December 2023
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                &nbsp; Opposite to Bharat Petrol Pump, Dasrathpur, Jajpur,
                Odisha 755006
              </p>
              <p className="mb-0">
                <FontAwesomeIcon icon={faClock} />
                &nbsp; 07:00PM - 10:00PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
