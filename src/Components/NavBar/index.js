import React from "react";
import { Navbar, Nav, Image, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <Image src="../../Static/global-macspec-logo.jpg" fluid />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Buy a mac</Nav.Link>
        <Nav.Link href="#features">Sell a mac</Nav.Link>
        <Nav.Link href="#pricing">Repairs</Nav.Link>
        <Nav.Link href="#pricing">Contact Us</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
