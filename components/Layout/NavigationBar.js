import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" style={{ zIndex: 100 }}>
      <Container fluid>
        <Navbar.Brand>Your Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/skill">
              Skill
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
