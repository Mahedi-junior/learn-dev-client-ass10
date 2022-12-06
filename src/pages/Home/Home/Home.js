import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CarouselBanner from "../../shared/Carousel/CarouselBanner";
import CourseSummaryCard from "../../shared/CourseSumarryCard/CourseSummaryCard";

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div className="mt-5">
      {/* <CarouselBanner></CarouselBanner> */}
      <h2>Learn Dev Courses: {allCourses.length}</h2>

      <Row xs={1} md={2} lg={2} className="gy-4 mx-3">
        {allCourses.map((course) => (
          <CourseSummaryCard
            key={course.id}
            course={course}
          ></CourseSummaryCard>
        ))}
      </Row>
    </div>
  );
};

export default Home;
