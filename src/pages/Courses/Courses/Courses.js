import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
  const singleCourse = useLoaderData();
  const { id, title, price, course, description, instructor, img } =
    singleCourse;
  // console.log(singleCourse);
  const buyNow = () => {
    toast.success("Thank You For Your Purchase!", {
      className: "mt-2 fs-5 mx-2",
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
          <Link>
            <Button
              onClick={buyNow}
              variant="outline-success"
              className="w-100 fs-5 fw-semibold"
            >
              Buy Now
            </Button>
          </Link>
        </Card.Body>
        <ToastContainer></ToastContainer>
      </Card>
    </Row>
  );
};

export default Courses;
