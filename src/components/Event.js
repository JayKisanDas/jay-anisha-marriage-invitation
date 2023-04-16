import event1 from "../assets/images/event-1.jpg";
import event2 from "../assets/images/event-2.jpg";

const Event = () => {
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
          <div className="col-md-6 border-right border-primary">
            <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
              <img className="img-fluid mb-4" src={event1} alt="" />
              <h4 className="mb-3">The Reception</h4>
              <p className="mb-2">
                Ambapua Rd., Near Kali Temple,
                <br />
                Bima Nagar, Brahmapur, Odisha 760010
              </p>
              <p className="mb-0">08:00PM - 10:00PM</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-left ml-md-3">
              <img
                className="img-fluid mb-4"
                style={{ width: "300px" }}
                src={event2}
                alt=""
              />
              <h4 className="mb-3">Wedding Party</h4>
              <p className="mb-2">
                Ambapua Rd., Near Kali Temple,
                <br />
                Bima Nagar, Brahmapur, Odisha 760010
              </p>
              <p className="mb-0">09:00PM - 12:00AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
