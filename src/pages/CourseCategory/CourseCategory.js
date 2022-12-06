import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategory from "../SingleCategory/SingleCategory";

const CourseCategory = () => {
  const categoryCourse = useLoaderData();
  // console.log(categoryCourse);
  return (
    <div>
      <h2>This is Course Category: {categoryCourse.length}</h2>

      {categoryCourse.map((category) => (
        <SingleCategory key={category.id} category={category}></SingleCategory>
      ))}
    </div>
  );
};

export default CourseCategory;
