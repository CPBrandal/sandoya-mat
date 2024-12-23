// Liv.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; // import needed for grid columns
import kilen3 from './res/kilen3.jpg';
import kilen4 from './res/kilen4.jpg';
import styles from './styles/Liv.css'

import 'bootstrap/dist/css/bootstrap.min.css';

export function Liv() {
  return (
    <div>
      {/* Top Nav Bar */}
      <Navbar
        expand="lg"
        className="bg-body-tertiary border-bottom border-2 border-body-secondary"
      >
        <Container>
          <Navbar.Brand className="fs-1" as={Link} to="/">
            Liv på Brygga
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link className="fs-3" as={Link} to="/">
                Sandøya Mat
              </Nav.Link>
              <NavDropdown className="fs-3" title="Mer" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/meny">
                  Meny
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

      <Container className="my-5">
        <Row className="align-items-center" style={{ minHeight: '400px' }}>
            <Col xs={12} md={6}>
            <img
                src={kilen3}
                alt="Kilen 3"
                className="img-fluid shadow"
            />
            </Col>
            <Col xs={12} md={6}>
            <h2>Liv på Brygga</h2>
            <p>
                På terrassen ved Sandøya Mat rett ved Sandøykilen, har det i årevis blitt servert god mat og godt drikke med sjøen som nærmeste nabo. 
                Det tenker vi å fortsette med. “Liv på Bryggekanten” kaller vi det nye tilskuddet til øya. 
                Restauranten drives av samme eiere som butikken, og med oss på laget har vi fått Lotta Røstad som flyttet til Sandøya for et par år siden. 
                Lotta har lang fartstid i “bransjen”, er svensk og vil nok sørge for at det også gjenspeiles i menyen. 
                Sammen brenner vi for å gjøre både Liv på Bryggekanten og butikken til øyas naturlige samlingssted, sommer som vinter. 
            </p>
            </Col>
        </Row>
        </Container>

      <Container className="mt-4">
        <Row>
          {/* Left Column for Image */}
          <Col xs={12} md={6}>
          <h2>Liv på Brygga</h2>
            <p>
              This is some content for the Liv page. You can add more text, 
              descriptions, or anything you’d like here.
            </p>
          </Col>

          {/* Right Column for Text */}
          <Col xs={12} md={6}>
            {/* If in public folder: */}
            <img
              src={kilen4}
              alt="Kilen 4"
              className="img-fluid shadow" // makes the image responsive
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
