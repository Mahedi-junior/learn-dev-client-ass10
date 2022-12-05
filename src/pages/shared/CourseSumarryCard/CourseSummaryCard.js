import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseSummaryCard = ({ course }) => {
  const { id, img, title, description, price, instructor } = course;
  return (
    <Col>
      <CardGroup className="h-100 border rounded">
        <Card.Img variant="top" src={img} />
        <Card.Body className="px-2">
          <Card.Title className="text-success my-2 text-start fs-4">
            {title}
          </Card.Title>
          <Card.Text className="fs-">
            {description.length > 100 ? (
              <p>
                {description.slice(0, 120) + "..."}{" "}
                <Link to={`/courses/${id}`}>Read More..</Link>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </Card.Text>
          <Button variant="primary" className="w-100">
            Course Details
          </Button>
        </Card.Body>
      </CardGroup>
    </Col>
  );
};

export default CourseSummaryCard;
