import React, { useState } from "react";
import "./YoutubeModal.css";

const YoutubeModal = () => {
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
      <button
        type="button"
        className="btn-play mx-auto"
        onClick={handleOpenModal}
      >
        <span></span>
      </button>
      {showModal && (
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

export default YoutubeModal;
