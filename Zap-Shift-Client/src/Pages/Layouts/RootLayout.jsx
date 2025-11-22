import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl flex flex-col justify-between min-h-screen mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
