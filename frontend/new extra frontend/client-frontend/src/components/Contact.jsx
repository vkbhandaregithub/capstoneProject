import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Eat & GO</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              aliquam molestiae? Magni fugit fuga beatae maxime eos est unde
              consequuntur. Fugit error harum voluptatem repellat aut corporis
              exercitationem sed hic, quidem maiores beatae voluptates quam
              aperiam omnis illo ex itaque dolore ipsa. Quo aperiam quis laborum
              repellendus ab voluptate nihil qui illo soluta, pariatur
              assumenda, labore, id est debitis sunt porro? Magni reiciendis
              illum earum, quibusdam quae adipisci totam assumenda aspernatur
              veniam rerum architecto eaque sequi autem beatae libero at iure
              quaerat corrupti voluptates consequatur illo? Repudiandae alias
              ducimus, incidunt delectus labore odit iusto, error, suscipit
              debitis et blanditiis laboriosam!
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning">Contact Details</th>
                  <th className="bg-warning">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                    +91-8565458795
                  </td>
                  <td>goto@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/veggie_paradise.jpg"
              alt="image not loaded"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
