import React from "react";
import { Link } from "react-router-dom";
import "./heading.scss";

const Heading = () => {
  return (
    <div className="heading-container">
      {/* <Link to="/">
        <img
          alt=""
          src={process.env.PUBLIC_URL + "static/global-macspec-logo.jpg"}
          width="100"
          height="100"
          className="gms-logo"
        />
      </Link> */}

      <div className="heading-content">
        <h2>Global Macspec</h2>
        <h4>Call us free on 07983209777</h4>
      </div>
    </div>
  );
};

export default Heading;
