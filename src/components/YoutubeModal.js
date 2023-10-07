import React, { useState, useEffect } from "react";

import "./YoutubeModal.css";

const YoutubeModal = ({ isPlaying, pauseBackgroundMusic }) => {
  const [showYoutubeModal, setShowYoutubeModal] = useState(false);

  // PAUSING BACKGROUND MUSIC ON OPEN OF YOUTUBE MODAL
  useEffect(() => {
    if (isPlaying) {
      setShowYoutubeModal(false);
    }
  }, [isPlaying]);

  // CLOSE YOUTUBE MODAL WHEN CLICKED ON CROSS ICON
  const handleCloseModal = () => {
    setShowYoutubeModal(false);
    document.body.style.overflow = "auto"; // ENABLE PAGE SCROLL AGAIN
  };

  // OPEN YOUTUBE MODAL
  const handleOpenModal = () => {
    setShowYoutubeModal(true);
    pauseBackgroundMusic(true); // PAUSE BACKGROUND MUSIC PROP PASSED TO Carousel.js
    document.body.style.overflow = "hidden"; // DISABLE PAGE SCROLL WHILE MODAL IS OPEN
  };

  return (
    <div>
      <button
        type="button"
        className="btn-play mx-auto"
        onClick={handleOpenModal}
      >
        <span></span>
      </button>
      {showYoutubeModal && (
        <style>
          {`.btn-play::before {
              animation: none !important;
              background: transparent !important;
            }`}
        </style>
      )}
      {showYoutubeModal && (
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
                  src={`https://www.youtube.com/embed/H1Kvsngq85o`}
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

export default YoutubeModal;
