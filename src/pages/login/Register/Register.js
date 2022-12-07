import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, PhotoURL, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate("/");
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-75 sm-w-100 mx-auto px-3 mt-5 rounded border pb-3 bg-white"
    >
      <h2 className="text-center fw-semibold text-success mt-3 fs-1">
        Please Register
      </h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter password"
          required
        />
      </Form.Group>
      <Form.Text className="text-danger ">{error}</Form.Text>

      <Form.Group className="m-2 " id="formGridCheckbox">
        <Form.Check
          onClick={handleAccepted}
          type="checkbox"
          label={
            <>
              Accepts <Link to="/terms">Terms and Conditions</Link>
            </>
          }
        />
      </Form.Group>

      <Button
        variant="outline-success"
        type="submit"
        disabled={!accepted}
        className="w-75 mx-auto d-flex justify-content-center fs-4 mt-3 fw-semibold"
      >
        Register
      </Button>

      <SocialLogin></SocialLogin>
    </Form>
  );
};

export default Register;
