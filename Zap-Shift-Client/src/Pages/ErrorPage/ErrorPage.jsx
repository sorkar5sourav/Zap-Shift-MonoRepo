import React from "react";
import ErrorBanner from "../../assets/Images/Frame 5.png";
const ErrorPage = () => {
  return (
    <div>
      <img src={ErrorBanner} alt="Error Banner" />
      <button className="btn btn-primary">Go Home</button>
    </div>
  );
};

export default ErrorPage;
