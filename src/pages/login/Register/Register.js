import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const PhotoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, PhotoURL, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
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
        <Form.Control name="PhotoURL" type="text" placeholder="Photo URL" />
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter password"
          required
        />
      </Form.Group>

      <Button
        variant="outline-success"
        type="submit"
        className="w-75 mx-auto d-flex justify-content-center fs-4 fw-semibold"
      >
        Register
      </Button>

      <Form.Text className="text-danger d-none">
        We'll never share your email with anyone else.
      </Form.Text>
      <SocialLogin></SocialLogin>
    </Form>
  );
};

export default Register;
