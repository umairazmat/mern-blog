import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Link className="text-white text-decoration-none px-2" to="/">
          <Navbar.Brand  className="fw-bold">
            MERN Blog
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="text-white text-decoration-none px-2" to="/about">
              About
            </Link>
            <Link
              className="text-white text-decoration-none px-2"
              to="/add-blog"
            >
              Add BLog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
