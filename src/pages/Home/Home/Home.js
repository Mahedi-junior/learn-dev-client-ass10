import React from "react";
import { useLoaderData } from "react-router-dom";
import CarouselBanner from "../../shared/Carousel/CarouselBanner";
import CourseSummaryCard from "../../shared/CourseSumarryCard/CourseSummaryCard";

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      {/* <CarouselBanner></CarouselBanner> */}
      <h2>Learn Dev Courses: {allCourses.length}</h2>
      <div className="row">
        <div className="">
          {allCourses.map((course) => (
            <CourseSummaryCard
              key={course.id}
              course={course}
            ></CourseSummaryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
