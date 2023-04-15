import React, { useState, useRef } from "react";

import db from "../../Firebase";
import FormSubmitAlert from "./FormSubmitAlert";

const Rsvp = () => {
  const formRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedGuestNumber, setSelectedGuestNumber] = useState("");
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const options = [
    {
      id: 1,
      label: "All Events",
      value: "all",
    },
    {
      id: 2,
      label: "Sangeet Party",
      value: "sangeet",
    },
    {
      id: 3,
      label: "Mehendi Party",
      value: "mehendi",
    },
    {
      id: 4,
      label: "Haldi Party",
      value: "haldi",
    },
    {
      id: 5,
      label: "Wedding Party",
      value: "weeding",
    },
  ];

  // ON GUEST NUMBER DROPDOWN CHANGE
  const onChangeGuestNumberHandler = (event) => {
    setSelectedGuestNumber(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // ON ATTEND DROPDOWN CHANGE
  const onChangeHandler = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // ON CHANGE FORM INPUTS
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // ON SUBMIT FORM
  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      attendingEvent: formData.attendingEvent,
      emailId: formData.emailId || "",
      fullName: formData.fullName,
      guestNumber: Number(formData.guestNumber) || 1,
      message: formData.message,
      timestamp: new Date().getTime(),
    });
    setSubmitted(true); // SET THE SUBMITTED STATE TO TRUE
    handleReset();
  };

  // ON RESET FORM
  const handleReset = () => {
    formRef.current.reset(); // RESET THE FORM
    setSelectedOption("");
    setSelectedGuestNumber("");
    setTimeout(() => {
      setSubmitted(false); // CLEAR THE SUBMITTED STATE AFTER A SHORT DELAY
    }, 1000);
  };

  return (
    <div className="container-fluid py-5" id="rsvp">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            RSVP
          </h6>
          <h1 className="font-secondary display-4">Join Our Party</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Full Name"
                      name="fullName"
                      id="fullName"
                      style={{ textTransform: "capitalize" }}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="email"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Your Email"
                      name="emailId"
                      id="emailId"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <select
                      value={selectedGuestNumber}
                      className="form-control bg-secondary border-0"
                      style={{ height: "52px" }}
                      onChange={onChangeGuestNumberHandler}
                      name="guestNumber"
                      id="guestNumber"
                    >
                      <option value="" disabled>
                        Number of Guest
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-6">
                    <select
                      value={selectedOption}
                      className="form-control bg-secondary border-0"
                      onChange={onChangeHandler}
                      required="required"
                      name="attendingEvent"
                      id="attendingEvent"
                    >
                      <option value="" disabled>
                        I'm Attending
                      </option>
                      {options.map((option) => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control bg-secondary border-0 py-2 px-3"
                    rows="5"
                    placeholder="Message"
                    required="required"
                    name="message"
                    id="message"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <FormSubmitAlert show={submitted} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
