import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

const Header = () => {
  const { searchParams, setSearchParams } = useContext(GlobalContext);
  return (
    <header className="flex justify-between items-center fixed bg-dark text-cream w-full py-4 px-8">
      <h1 className="text-2xl font-bold">Recipe App</h1>
      <form>
        <input type="text" name="search" placeholder="Enter Recipe Name..." className="rounded-full w-42 lg:w-56 px-4 py-2 bg-charcoal" value={searchParams} onChange={(event) => setSearchParams(event.target.value)}/>
      </form>
      <nav className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-navLink' : 'inactive-navLink'}
        >Home</NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? 'active-navLink' : 'inactive-navLink'}>Favorites</NavLink>
      </nav>
    </header>
  );
};

export default Header;
