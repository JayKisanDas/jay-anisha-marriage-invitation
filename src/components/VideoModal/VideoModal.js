import React, { useState } from "react";

const VideoModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{props.title}</h2>
              <button className="close-btn" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-content">{props.content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
