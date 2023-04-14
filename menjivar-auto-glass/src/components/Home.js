import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <img
        className="banner-img"
        src={require("./images/test-image03.jpg")}
        alt="test image"
      />
      <div className="container">
        <h1 id="brand-title">Menjivar Auto Glass</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="caution-box">
        <FontAwesomeIcon icon={faHand} className="caution-icon" />
        <p className="caution-text">
          Caution: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>            
        </div>

        <h2>Completed Jobs:</h2>
        <div className="job-flex">
            <img
            className="jobs-completed-img"
            src={require("./images/job-completed01.jpg")}
            alt="job-completed-01"
            />
            <img
            className="jobs-completed-img"
            src={require("./images/job-completed02.jpg")}
            alt="job-completed-02"
            />
            <img
            className="jobs-completed-img"
            src={require("./images/job-completed03.jpg")}
            alt="job-completed-03"
            />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
