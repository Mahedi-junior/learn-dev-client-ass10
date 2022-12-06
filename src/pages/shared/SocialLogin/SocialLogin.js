import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.log(error));
  };
  return (
    <div>
      <Button
        onClick={handleGoogleSignIn}
        variant="success"
        className="w-100 fs-5 mt-3"
      >
        Login With Google <FaGoogle className="ms-2"></FaGoogle>
      </Button>
      <Button variant="primary" className="w-100 fs-5 my-2">
        Login With FaceBook <FaFacebook className="ms-2"></FaFacebook>
      </Button>
      <Button variant="danger" className="w-100 fs-5 ">
        Login With Github <FaGithub className="ms-2"></FaGithub>
      </Button>
    </div>
  );
};

export default SocialLogin;
