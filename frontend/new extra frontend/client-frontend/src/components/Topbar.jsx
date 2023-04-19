import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MdLocalOffer } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
const Topbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light d-flex gap-2 mt-2">
            <MdLocalOffer className="text-danger mt-1" />
            Order Above 500Rs And Get Free Delivery
          </h6>
          <Nav className="ms-auto">
            <LinkContainer to="/home" activeClassName="">
              <Nav.Link className="text-uppercase">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about" activeClassName="">
              <Nav.Link className="text-uppercase">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/service" activeClassName="">
              <Nav.Link className="text-uppercase">Service</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link className="text-uppercase">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
