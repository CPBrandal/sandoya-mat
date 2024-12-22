// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
  return (
    <div className="Home">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* Replace href with as={Link} + to */}
          <Navbar.Brand as={Link} to="/">
            Sandøya Mat
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Home link */}
              <Nav.Link as={Link} to="/">
                Hjem
              </Nav.Link>

              {/* Liv link */}
              <Nav.Link as={Link} to="/liv">
                Liv på Brygga
              </Nav.Link>

              {/* Dropdown items */}
              <NavDropdown title="Mer" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
