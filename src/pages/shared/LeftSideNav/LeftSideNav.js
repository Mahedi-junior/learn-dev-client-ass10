import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselBanner from "../Carousel/CarouselBanner";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  useEffect(() => {
    fetch("https://learn-dev-server.vercel.app/course-category")
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
        <div className="mb-3">
          <Link to="/">
            <Button variant="success" className="w-100 fs-5">
              All Courses
            </Button>
          </Link>
        </div>
        <CarouselBanner></CarouselBanner>
      </div>
    </div>
  );
};

export default LeftSideNav;
