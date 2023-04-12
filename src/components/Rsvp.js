import { useState, useEffect } from "react";

import db from "../Firebase.js";

const Rsvp = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({});

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

  const onChangeHandler = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      attendingEvent: formData.attendingEvent,
      emailId: formData.emailId,
      firstName: formData.firstName,
      guestNumber: formData.guestNumber,
      message: formData.message,
      timestamp: new Date().getTime(),
    });
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
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Your Name"
                      name="firstName"
                      id="firstName"
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
                      className="form-control bg-secondary border-0"
                      style={{ height: "52px" }}
                      onChange={handleChange}
                      name="guestNumber"
                      id="guestNumber"
                    >
                      <option>Number of Guest</option>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
