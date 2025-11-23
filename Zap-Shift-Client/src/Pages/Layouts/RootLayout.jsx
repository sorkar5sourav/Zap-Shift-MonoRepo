import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-[1440px] flex flex-col justify-between min-h-screen mx-auto gap-10 p-5">
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;
