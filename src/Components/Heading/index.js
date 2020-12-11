import React from "react";
import "./heading.scss";

const Heading = () => {
  return (
    <div className="heading-container">
      <img
        alt=""
        src={process.env.PUBLIC_URL + "static/global-macspec-logo.jpg"}
        width="100"
        height="100"
        className="gms-logo"
      />
      <div className="heading-content">
        <h2>Global Mac Spec</h2>
        <h4>Call us free on 07983209777</h4>
      </div>
      <div></div>
    </div>
  );
};

export default Heading;

{
  /* <Navbar.Brand as={Link} to="/">
<img
  alt=""
  src={process.env.PUBLIC_URL + "static/global-macspec-logo.jpg"}
  width="45"
  height="45"
  className="d-inline-block align-top"
/>
</Navbar.Brand> */
}
