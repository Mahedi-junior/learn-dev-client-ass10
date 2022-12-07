import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategory from "../SingleCategory/SingleCategory";

const CourseCategory = () => {
  const categoryCourse = useLoaderData();
  // console.log(categoryCourse);
  return (
    <div>
      {categoryCourse.map((category) => (
        <SingleCategory key={category.id} category={category}></SingleCategory>
      ))}
    </div>
  );
};

export default CourseCategory;
