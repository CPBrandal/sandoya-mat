// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/Home.css';


import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
  return (
    <>
    <div className="Home-nav">
      <Navbar expand="lg" className="bg-body-tertiary border-bottom border-2 border-body-secondary">
        <Container>
          {/* Replace href with as={Link} + to */}
          <Navbar.Brand className='fs-1' as={Link} to="/">
            Sandøya Mat
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              {/* Home link */}


              {/* Liv link */}
              <Nav.Link className='fs-3' as={Link} to="/liv">
                Liv på Bryggekanten
              </Nav.Link>

              {/* Dropdown items */}
              <NavDropdown className='fs-3' title="Mer" id="basic-nav-dropdown">
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
    <div className="Home-content">
      <h2>Sandøya Mat</h2>
      <p>This is some content for the Home page.</p>
    </div>
    </>
  );
}
