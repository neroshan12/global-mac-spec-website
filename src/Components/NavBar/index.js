import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.scss";

const NavBar = () => {
  return (
    <Navbar bg="light" variat="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/buy">
          Buy a mac
        </Nav.Link>
        <Nav.Link as={Link} to="/hire">
          Hire a mac
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
