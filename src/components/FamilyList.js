import React, { useState } from "react";
import $ from "jquery";

import brideFamily1 from "../assets/images/bridesmaid-1.jpg";
import brideFamily2 from "../assets/images/bridesmaid-2.jpg";
import brideFamily3 from "../assets/images/bridesmaid-3.jpg";
import groomFamily1 from "../assets/images/groomsmen-1.jpg";
import groomFamily2 from "../assets/images/groomsmen-2.jpg";
import groomFamily3 from "../assets/images/groomsmen-3.jpg";

const FamilyList = () => {
  const [filterValue, setFilterValue] = useState("");
  const familyList = [
    {
      id: 1,
      category: "groom",
      fullName: "Digambar Das",
      desc: "Groom's Father",
      imgSrc: groomFamily1,
      instagramLink: "",
      facebookLink:
        "https://www.facebook.com/digambar.das.71653?mibextid=ZbWKwL",
      linkedinLink: "",
      twitterLink: "",
    },
    {
      id: 2,
      category: "bride",
      fullName: "Sanat Kumar Raut",
      desc: "Bride's Father",
      imgSrc: brideFamily1,
      instagramLink: "https://www.instagram.com/sanatkumarraut/",
      facebookLink:
        "https://www.facebook.com/profile.php?id=100008202887640&mibextid=ZbWKwL",
      linkedinLink: "",
      twitterLink: "",
    },
    {
      id: 3,
      category: "groom",
      fullName: "Kumkum Das",
      desc: "Groom's Mother",
      imgSrc: groomFamily2,
      instagramLink: "",
      facebookLink: "https://www.facebook.com/kumkum.das.3720?mibextid=ZbWKwL",
      linkedinLink: "",
      twitterLink: "",
    },
    {
      id: 4,
      category: "bride",
      fullName: "Aslesa Padhi",
      desc: "Bride's Mother",
      imgSrc: brideFamily2,
      instagramLink: "https://www.instagram.com/aslesa_19/",
      facebookLink: "https://www.facebook.com/aslesa.padhi?mibextid=ZbWKwL",
      linkedinLink: "",
      twitterLink: "",
    },
    {
      id: 5,
      category: "groom",
      fullName: "Sambit Kumar Das",
      desc: "Groom's Brother",
      imgSrc: groomFamily3,
      instagramLink: "https://www.instagram.com/__.btw.its_sam._/",
      facebookLink: "https://www.facebook.com/Sambit.kumar143?mibextid=ZbWKwL",
      linkedinLink: "https://www.linkedin.com/in/sambit-kumar-das-a42a0919b/",
      twitterLink: "",
    },
    {
      id: 6,
      category: "bride",
      fullName: "Shital Raut",
      desc: "Bride's Sister",
      imgSrc: brideFamily3,
      instagramLink: "https://www.instagram.com/__shital____/",
      facebookLink: "",
      linkedinLink: "https://www.linkedin.com/in/shital-raut-7970a1205/",
      twitterLink: "",
    },
  ];

  const handleFilterClick = (category) => {
    setFilterValue(category);
  };

  // FILTERING LIST ON BUTTON CLICK
  const filteredList = filterValue
    ? familyList.filter((div) => div.category === filterValue)
    : familyList;

  // ADDING ACTIVE CLASS ON BUTTON CLICK FOR FILTER
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
  });

  return (
    <div className="container-fluid py-5" id="family">
      <div className="container pt-5 pb-3">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Friends & Family
          </h6>
          <h1 className="font-secondary display-4">
            👨🏻‍👩🏻‍👦🏻‍🧒🏻 Groom's & Bride's Family 👨🏻‍👩🏻‍👧🏻‍👧🏻
          </h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li
                className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                data-filter=".first"
                onClick={() => handleFilterClick("groom")}
              >
                Groom's Family
              </li>
              <li
                className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                data-filter=".second"
                onClick={() => handleFilterClick("bride")}
              >
                Bride's Family
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {filteredList.map((list) => (
            <div
              key={list.id}
              className="col-lg-4 col-md-6 mb-4 portfolio-item first"
            >
              <div className="position-relative mb-2">
                <img className="img-fluid w-100" src={list.imgSrc} alt="" />
                <div className="bg-secondary text-center p-4">
                  <h4 className="mb-3">{list.fullName}</h4>
                  <p className="text-uppercase">{list.desc}</p>
                  <div className="d-inline-block">
                    {list.twitterLink && (
                      <a
                        className="mx-2"
                        href={list.twitterLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {list.facebookLink && (
                      <a
                        className="mx-2"
                        href={list.facebookLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    )}
                    {list.linkedinLink && (
                      <a
                        className="mx-2"
                        href={list.linkedinLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {list.instagramLink && (
                      <a
                        className="mx-2"
                        href={list.instagramLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyList;
