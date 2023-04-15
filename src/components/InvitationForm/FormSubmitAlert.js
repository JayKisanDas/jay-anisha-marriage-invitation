import React from "react";

import "./FormSubmitAlert.css";

function FormSubmitAlert(props) {
  return (
    <div className={`popup ${props.show ? "show" : ""}`}>
      <div className="popup-content">
        <p>Form submitted successfully!</p>
      </div>
    </div>
  );
}

export default FormSubmitAlert;
