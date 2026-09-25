import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../shared/ui/components/NavBar";
import Footer from "../../shared/ui/components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
