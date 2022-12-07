import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-danger mt-5 text-center">
      <h1>Not Found Anything</h1>
      <Link to="/">
        <Button className="w-50" variant="outline-danger">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
