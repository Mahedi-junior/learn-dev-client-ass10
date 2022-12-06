import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const singleCourse = useLoaderData();
  const { id, title, price, course, description, instructor, img } =
    singleCourse;
  // console.log(singleCourse);
  return (
    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Card style={{ width: "38rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-success">{title}</Card.Title>
          <Card.Text className="text-start">{description}</Card.Text>
          <div className="d-flex justify-content-between  fs-5">
            <span>Course: {course}</span>
            <span>Price: {price}</span>
          </div>
          <p className="p-0 m-0 mb-2 fs-5 text-start">
            Instructor:{" "}
            <span className="text-primary fw-semibold">{instructor}</span>
          </p>
          <Button variant="success" className="w-100 fs-5 fw-semibold">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Courses;
