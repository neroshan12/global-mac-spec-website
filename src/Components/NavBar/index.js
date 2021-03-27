import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.scss";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand as={Link} to="/">
          <img
            src={process.env.PUBLIC_URL + "static/global-macspec-logo.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav.Link as={Link} to="/buy">
          Buy
        </Nav.Link>
        <Nav.Link as={Link} to="/hire">
          Hire
        </Nav.Link>
        <Nav.Link as={Link} to="/sell">
          Sell
        </Nav.Link>
        <Nav.Link as={Link} to="/repairs">
          Repairs
        </Nav.Link>
        <Nav.Link as={Link} to="/about-us">
          About Us
        </Nav.Link>
        <Nav.Link as={Link} to="/covid-19">
          Covid-19
        </Nav.Link>
        <Nav.Link as={Link} to="/contact-us">
          Contact Us
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
