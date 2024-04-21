import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed z-20 bg-cream dark:bg-dark text-dark dark:text-cream w-full py-4 px-2 sm:px-8 font-primary shadow-2xl">
      <h1 className="text-2xl font-bold whitespace-nowrap">Recipe App</h1>
      <Navbar />
    </header>
  );
};

export default Header;
