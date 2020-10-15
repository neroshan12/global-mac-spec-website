import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" variat="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src={process.env.PUBLIC_URL + "static/global-macspec-logo.jpg"}
          width="45"
          height="45"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/buy">
          Buy a mac
        </Nav.Link>
        <Nav.Link as={Link} to="/sell">
          Sell a mac
        </Nav.Link>
        <Nav.Link as={Link} to="/repairs">
          Repairs
        </Nav.Link>
        <Nav.Link as={Link} to="/about-us">
          About Us
        </Nav.Link>
        <Nav.Link as={Link} to="/contact-us">
          Contact Us
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
