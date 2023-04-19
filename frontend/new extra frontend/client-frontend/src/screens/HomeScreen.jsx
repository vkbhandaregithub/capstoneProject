import React from "react";
import Allpizza from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <h2 className="my-3">Our Special Dishes</h2>
          {Allpizza.map((pizza, i) => (
            <Col md={4} key={i}>
              <Pizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
