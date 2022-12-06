import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleCategory = ({ category }) => {
  const { id, title, price, course, description, img } = category;
  console.log(category);
  return (
    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Card style={{ width: "38rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="success" className="w-75 fs-5 fw-semibold">
            More Details..
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default SingleCategory;
