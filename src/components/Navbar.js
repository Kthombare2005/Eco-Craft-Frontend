import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Eco-Craft Logo"
            src={
              process.env.PUBLIC_URL +
              "assets/DALL·E 2024-09-18 08.05.13 - A modern, eco-friendly logo for a platform called 'Eco-Craft' that specializes in converting scrap into treasure. The logo should incorporate elements.webp"
            } // Make sure the logo is correctly named and located in the assets folder
            height="40"
            className="d-inline-block align-top"
          />{" "}
          Eco-Craft
        </Navbar.Brand>

        {/* Navbar Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/why-us" className="nav-link">
              Why Us?
            </Nav.Link>
            <Nav.Link as={Link} to="/scrap-rates" className="nav-link">
              Scrap Rates
            </Nav.Link>
          </Nav>

          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Get it on Google Play"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              height="30"
            />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
