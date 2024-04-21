import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <div className="bg-offWhite dark:bg-charcoal min-h-screen">
      <Header />
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
