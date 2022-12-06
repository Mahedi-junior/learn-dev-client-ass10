import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  useEffect(() => {
    fetch("http://localhost:5000/course-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-5">
      <h2>Courses Categories: {categories.length}</h2>

      <div className="p-3">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>
              <Button variant="outline-success" className="w-100 fs-5">
                {category.name}
              </Button>
            </Link>
          </p>
        ))}
        <div className="">
          <Button variant="success" className="w-100 fs-5 mt-3">
            Login With Google <FaGoogle className="ms-2"></FaGoogle>
          </Button>
          <Button variant="primary" className="w-100 fs-5 my-2">
            Login With FaceBook <FaFacebook className="ms-2"></FaFacebook>
          </Button>
          <Button variant="danger" className="w-100 fs-5 ">
            Login With Github <FaGithub className="ms-2"></FaGithub>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
