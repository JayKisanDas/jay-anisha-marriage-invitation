import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/en-au"; // CHANGE THE LOCALE ACCORDING TO YOUR PREFERENCE
import "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import gif from "../../assets/images/giphy.gif";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState("");
  const [isCelebrating, setIsCelebrating] = useState(false);

  useEffect(() => {
    const futureDate = moment("2023-12-05 23:59:59"); // REPLACE WITH YOUR DESIRED FUTURE DATE
    const interval = setInterval(() => {
      const now = moment();
      const diff = futureDate.diff(now);
      const duration = moment.duration(diff);

      if (duration <= 0) {
        clearInterval(interval);
        setIsCelebrating(true);
        // setCountdown("Reached the future date!");
      } else {
        const months = duration.months();
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        let countdownString = "";
        if (months > 0) {
          countdownString += `${months} month${months > 1 ? "s" : ""}, `;
        }
        if (days > 0) {
          countdownString += `${days} day${days > 1 ? "s" : ""}, `;
        }
        countdownString += `${hours}h ${minutes}m ${seconds}s`;

        setCountdown(countdownString);
        setIsCelebrating(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${!isCelebrating ? "countdown" : ""}`}>
      {!isCelebrating && (
        <div>
          <FontAwesomeIcon icon={faClock} />
          &nbsp; {countdown}
        </div>
      )}
      {isCelebrating && (
        <img
          className={`firework-crackles ${isCelebrating ? "celebrate" : ""}`}
          src={gif}
          alt="Marriage GIF"
        />
      )}
    </div>
  );
};

export default CountdownTimer;
