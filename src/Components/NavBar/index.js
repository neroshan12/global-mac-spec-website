import React from "react";
import { Navbar, Nav, Image, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" variat="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="../../Static/global-macspec-logo.jpg"
          width="30"
          height="30"
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
