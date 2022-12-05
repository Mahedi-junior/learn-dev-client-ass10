import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("http://localhost:5000/course-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2>Courses Categories: {categories.length}</h2>

      <div className="">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>
              <Button variant="outline-success" className="w-100 fs-5">
                {category.name}
              </Button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
