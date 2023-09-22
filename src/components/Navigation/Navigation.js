import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg"  bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          MERN Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#">New Blog</Nav.Link>
            <Nav.Link href="#">All Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
