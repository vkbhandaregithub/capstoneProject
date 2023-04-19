import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("SMALL");
  const [quantity, setQuantity] = useState(1);
  // statesfor model
  const [show, setShow] = useState(false);
  //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  return (
    <>
      <Card
        style={{ width: "18rem", padding: "0px", outline: "0", border: "0" }}
        className="my-3 card-bg card-container"
      >
        <Card.Img
          // onClick={handleShow}
          variant="top"
          className="card-img"
          src={pizza.image}
          style={{ height: "164px" }}
        />
        <Card.Body className="border-1">
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text className="my-4">
            <Row className="">
              <Col md={6}>
                <select
                  name=""
                  id=""
                  className="p-2 card-select-btn"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient, i) => (
                    <option key={i}>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <select
                  name=""
                  id=""
                  className="p-2 card-select-btn"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((ele, i) => (
                    <option value={i + 1} key={i}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button>
           */}
          <Row className="mb-3">
            <Col md={12}>
              <b>Price : {pizza.prices[0][varient] * quantity}/-RS</b>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <Button className="btn card-btn-viewmore" onClick={handleShow}>
                ViewMore
              </Button>
            </Col>
            <Col md={6}>
              <Button className="btn card-btn">Add To Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* modal start */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-img w-100 mb-3">
            <Card.Img src={pizza.image} />
          </div>
          <b>Description : </b>
          {pizza.description} <br />
          <b>Category : </b>
          {pizza.category.toUpperCase()}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Pizza;
