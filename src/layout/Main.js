import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import CarouselBanner from "../pages/shared/Carousel/CarouselBanner";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";
import LeftSideNav from "../pages/shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      {/* <CarouselBanner></CarouselBanner> */}
      {/* <Home></Home> */}
      <Container>
        <Row>
          <Col lg="4">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
