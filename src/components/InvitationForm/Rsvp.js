import React, { useState, useRef } from "react";
import Select from "react-select";

import db from "../../Firebase";
import FormSubmitAlert from "./FormSubmitAlert";

const Rsvp = () => {
  const formRef = useRef(null);
  // const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSideOption, setSelectedSideOption] = useState([]);
  // const [selectedGuestNumber, setSelectedGuestNumber] = useState("");
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "none" : "none",
      backgroundColor: "#edf5f7",
      padding: "0",
      textAlign: "left",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#d1671b",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: "2px",
    }),
  };
  const options = [
    {
      id: 1,
      label: "Mehendi (5th Dec. 2023 - Morning)",
      value: "mehendi",
    },
    {
      id: 2,
      label: "Sangeet (5th Dec. 2023 - Evening)",
      value: "sangeet",
    },
    {
      id: 3,
      label: "Haldi (6th Dec. 2023 - Morning)",
      value: "haldi",
    },
    {
      id: 4,
      label: "Wedding (6th Dec. 2023 - Evening)",
      value: "wedding",
    },
    {
      id: 5,
      label: "Reception (10th Dec. 2023 - Evening)",
      value: "reception",
    },
  ];
  const sideOptions = [
    {
      id: 1,
      label: "🤵🏻Groom's Guest",
      value: "groom",
    },
    {
      id: 2,
      label: "👰🏻Bride's Guest",
      value: "bride",
    },
    {
      id: 3,
      label: "🤵🏻👰🏻Guest From Both Sides",
      value: "both",
    },
  ];

  // ON ATTEND AS DROPDOWN CHANGE
  const handleSelectSideChange = (selectedSideOption) => {
    setSelectedSideOption(selectedSideOption);
    setFormData({
      ...formData,
      attendingAs: selectedSideOption,
    });
  };

  // ON ATTEND DROPDOWN CHANGE
  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    setFormData({
      ...formData,
      attendingEvent: selectedOptions,
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
    if (!formData?.message) {
      formData.message = "";
    }
    db.collection("posts").add({
      attendingAs: formData.attendingAs,
      attendingEvent: formData.attendingEvent,
      // emailId: formData.emailId || "",
      fullName: formData.fullName,
      // guestNumber: Number(formData.guestNumber) || 1,
      message: formData.message,
      timestamp: new Date().getTime(),
    });
    setSubmitted(true); // SET THE SUBMITTED STATE TO TRUE
    handleReset();
  };

  // ON RESET FORM
  const handleReset = () => {
    formRef.current.reset(); // RESET THE FORM
    setSelectedSideOption([]);
    setSelectedOptions([]);
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
          <h1 className="font-secondary display-4">💃🏻Join Our Party 🎉</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      required="required"
                      placeholder="Full Name"
                      name="fullName"
                      id="fullName"
                      style={{ textTransform: "capitalize" }}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <Select
                      className="form-control bg-secondary border-0 multiselect-dropdown"
                      styles={customStyles}
                      required="required"
                      name="attendingAs"
                      id="attendingAs"
                      isMulti
                      placeholder="I'm Attending As"
                      options={sideOptions}
                      value={selectedSideOption}
                      onChange={handleSelectSideChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <Select
                      className="form-control bg-secondary border-0 multiselect-dropdown"
                      styles={customStyles}
                      required="required"
                      name="attendingEvent"
                      id="attendingEvent"
                      isMulti
                      placeholder="I'm Attending"
                      options={options}
                      value={selectedOptions}
                      onChange={handleSelectChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control bg-secondary border-0 py-2 px-3"
                    rows="5"
                    placeholder="Message"
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
