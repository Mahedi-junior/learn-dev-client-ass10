import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PurchaseCourse = () => {
  const buyNow = () => {
    toast.success("Thank You For Your Purchase!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div>
      <h1>Thank You For Purchase Our Course</h1>
      <Button
        onClick={buyNow}
        variant="outline-success"
        className="w-100 fs-5 fw-semibold"
      >
        Purchased
      </Button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default PurchaseCourse;
