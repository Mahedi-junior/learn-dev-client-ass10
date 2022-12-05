import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CourseSummaryCard = ({ course }) => {
  return (
    <Row xs={1} md={2} className="g-2 mt-3">
      <Col>
        <Card>
          <Card.Img variant="top" src={course.img} />
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CourseSummaryCard;
