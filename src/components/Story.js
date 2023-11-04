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
          <h1 className="font-secondary display-4">💖Our Love Story👨🏻‍🤝‍👩🏻</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="container timeline position-relative p-0">
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <img
                className="img-fluid mr-md-3"
                style={{ width: "300px" }}
                src={story1}
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                <h4 className="mb-2">First Meet</h4>
                <p className="text-uppercase mb-2">03 May 2011</p>
                <p className="m-0">
                  We shared the same classroom but never spoke. However, our
                  parents' friendship brought us together for English tuition.
                  Who would've guessed this tuition journey would become an
                  everlasting connection? 😉📚✨
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
                  💞 Our love story has been defined by a "Long Distance
                  Relationship" since the very start. Every reunion after a
                  prolonged separation is incredibly precious, filled with a
                  plethora of cherished memories. 🌟
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-left">
              <img
                className="img-fluid ml-md-3"
                style={{ width: "300px" }}
                src={story2}
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <img
                className="img-fluid mr-md-3"
                style={{ width: "300px" }}
                src={story3}
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                <h4 className="mb-2">Proposal</h4>
                <p className="text-uppercase mb-2">04 Sep 2011</p>
                <p className="m-0">
                  In her innocence and his charm, a beautiful story began. As
                  our love blossomed, it painted vibrant hues into the canvas of
                  our lives. Will you join me in this ever-evolving journey of
                  love and color? 🌈💍✨
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
                  Our love is the realization of a dream. Slipping your ring
                  onto my finger brings the most enchanting sensation
                  imaginable. Today, it dawned on us: "Yes, we've made it." Love
                  within us expands like radiant stars. Love isn't merely a
                  word; it's the source of everything we cherish. 💫💖🌟
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-left">
              <img
                className="img-fluid ml-md-3"
                style={{ width: "300px" }}
                src={story4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
