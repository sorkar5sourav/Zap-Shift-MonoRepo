import React from "react";
import ErrorLogo from "../../assets/Images/ErrorLogo.png";
import { Link } from "react-router";
import NavBar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between px-5 items-center max-w-[1440px] mx-auto">
      <NavBar />
      <div className="flex flex-col items-center w-full justify-center bg-white p-15 rounded-4xl">
        <img src={ErrorLogo} className="" alt="Error Logo" />
        <Link to="/" className="btn btn-primary rounded-lg">
          Go Home
        </Link>
      </div>
      <div className="h-full"></div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
