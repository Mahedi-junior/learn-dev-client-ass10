import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap";

const CourseSummaryCard = ({ course }) => {
  const { id, img, title, description, price, instructor } = course;
  return (
    <Col className="mt-5">
      <CardGroup className="h-100 border rounded">
        <Card.Img fluid variant="top" src={img} />
        <Card.Body className="px-2">
          <Card.Title className="text-success my-2 text-start fs-4">
            {title}
          </Card.Title>
          <Card.Text className="fs-5 text-start">
            {description.length > 100 ? (
              <p>{description.slice(0, 120) + "..."} </p>
            ) : (
              <p>{description}</p>
            )}
          </Card.Text>
          <div className=" d-flex fs-5 mb-2 fw-semibold align-items-center justify-content-between px-2 ">
            <span className="p-0 m-0">instructor: {instructor}</span>
            <span className="p-0 m-0 ">${price}</span>
          </div>
          <Button variant="success" className="w-100 text-white">
            <Link className="text-white fs-5 fw-semibold" to={`/courses/${id}`}>
              Course Details
            </Link>
          </Button>
        </Card.Body>
      </CardGroup>
    </Col>
  );
};

export default CourseSummaryCard;
