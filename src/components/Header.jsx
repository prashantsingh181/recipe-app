import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed bg-dark text-cream w-full py-4 px-8">
      <h1 className ="text-2xl font-bold">Recipe App</h1>
      <nav className="flex gap-6">
        <NavLink to="/" className="hover:text-hover">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};

export default Header;
