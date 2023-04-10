import React, { useState } from "react";
import "./YoutubeButton.css";

const YoutubeButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Enable page scroll again
  };

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden"; // Disable page scroll while modal is open
  };

  return (
    <div>
      {/* <button onClick={handleOpenModal}>Watch video</button> */}
      <button
        type="button"
        className="btn-play mx-auto"
        onClick={handleOpenModal}
      >
        <span></span>
      </button>
      {showModal && (
        // <div
        //   className={`modal ${showModal ? "show" : ""}`}
        //   onClick={handleCloseModal}
        // >
        //   <div className="modal-video" onClick={(e) => e.stopPropagation()}>
        //     {/* <button className="modal-close" onClick={handleCloseModal}>
        //       X
        //     </button> */}
        //     <iframe
        //       src={`https://www.youtube.com/embed/1z7xjrNsLmI`}
        //       title="YouTube video player"
        //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //       allowFullScreen
        //     ></iframe>
        //   </div>
        // </div>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" onClick={handleCloseModal}>
                  &times;
                </span>
              </button>
              {/* 16:9 aspect ratio */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  src={`https://www.youtube.com/embed/1z7xjrNsLmI`}
                  title="YouTube video player"
                  allow="autoplay; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeButton;
