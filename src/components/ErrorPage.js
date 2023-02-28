import React from "react";
import Error from "../assets/img/error.jpg";
import "../assets/styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={Error} alt="" />
    </div>
  );
};

export default ErrorPage;
