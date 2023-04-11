import "./Story.css";

import story1 from "../assets/images/story-1.jpg";
import story2 from "../assets/images/story-2.jpg";
import story3 from "../assets/images/story-3.jpg";
import story4 from "../assets/images/story-4.jpg";

const Story = () => {
  return (
    <div className="container-fluid py-5" id="story">
      <div className="container pt-5 pb-3">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Story
          </h6>
          <h1 className="font-secondary display-4">Our Love Story</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="container timeline position-relative p-0">
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <img className="img-fluid mr-md-3" src={story1} alt="" />
            </div>
            <div className="col-md-6 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                <h4 className="mb-2">First Meet</h4>
                <p className="text-uppercase mb-2">04 Sep 2011</p>
                <p className="m-0">
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                <h4 className="mb-2">First Date</h4>
                <p className="text-uppercase mb-2">04 Sep 2011</p>
                <p className="m-0">
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-left">
              <img className="img-fluid ml-md-3" src={story2} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <img className="img-fluid mr-md-3" src={story3} alt="" />
            </div>
            <div className="col-md-6 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                <h4 className="mb-2">Proposal</h4>
                <p className="text-uppercase mb-2">04 Sep 2011</p>
                <p className="m-0">
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                <h4 className="mb-2">Engagement</h4>
                <p className="text-uppercase mb-2">04 Dec 2022</p>
                <p className="m-0">
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-left">
              <img className="img-fluid ml-md-3" src={story4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
