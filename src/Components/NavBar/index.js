import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" variat="light" expand="lg">
      <Navbar.Brand href="#home">
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
        <Nav.Link href="#buy">Buy a mac</Nav.Link>
        <Nav.Link href="#sell">Sell a mac</Nav.Link>
        <Nav.Link href="#repairs">Repairs</Nav.Link>
        <Nav.Link href="#aboutUs">About Us</Nav.Link>
        <Nav.Link href="#contactUs">Contact Us</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
