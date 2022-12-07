import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SingleCategory = ({ category }) => {
  const { id, title, price, course, description, img } = category;
  // console.log(category);
  return (
    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Card style={{ width: "38rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/courses/${id}`}>
            <Button
              variant="success"
              className="w-100 mx-auto fs-5 fw-semibold"
            >
              More Details..
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default SingleCategory;
