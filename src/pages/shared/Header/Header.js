import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white">
            Learn-Dev
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link href="#pricing" className="text-white fs-5">
              <Link to="/allcourses" className="text-white">
                AllCourses
              </Link>
            </Nav.Link>
            <Nav.Link className="text-white fs-5">
              <Link to="/blog" className="text-white">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white fs-5">
              FAQ
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-white">
              {user?.uid ? (
                <>
                  <span className="fs-5">{user?.displayName}</span>
                  <Button
                    onClick={handleLogOut}
                    variant="outline-warning"
                    className="rounded mx-3 fw-semibold "
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      className="rounded mx-2 fw-semibold px-3 fs-5"
                      variant="outline-info"
                    >
                      Log In
                    </Button>
                  </Link>

                  <Link to="/register">
                    <Button
                      className="rounded mx-2 fw-semibold px-2 fs-5"
                      variant="outline-info"
                    >
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="text-white">
              {user?.photoURL ? (
                <>
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                </>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
