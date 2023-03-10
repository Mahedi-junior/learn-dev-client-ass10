import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");

        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your Email is NOT Verified..Please Verified your Email Address"
          );
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-75 sm-w-100 mx-auto px-3 mt-5 rounded border pb-3"
    >
      <h2 className="text-center fw-semibold text-success mt-3 fs-1">
        Please Login
      </h2>
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
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
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Text className="text-danger">{error}</Form.Text>
      <Form.Text className="text-danger">
        New to learn dev ? Please <Link to="/register">register</Link>{" "}
      </Form.Text>
      <Button
        variant="outline-success"
        type="submit"
        className="w-75 mx-auto d-flex justify-content-center fs-4 fw-semibold mt-3"
      >
        Login
      </Button>

      <SocialLogin></SocialLogin>
    </Form>
  );
};

export default Login;
