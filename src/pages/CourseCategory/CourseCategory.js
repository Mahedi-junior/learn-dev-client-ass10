import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseCategory = () => {
  const course = useLoaderData();
  // console.log(course);
  return (
    <div>
      <h2>This is Course Category: {course.length}</h2>
    </div>
  );
};

export default CourseCategory;
