import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

const Header = () => {
  const { searchParams, setSearchParams, handleSubmit } = useContext(GlobalContext);
  return (
    <header className="flex justify-between items-center fixed bg-dark text-cream w-full py-4 px-8 font-primary">
      <h1 className="text-2xl font-bold">Recipe App</h1>
      <form className="w-[30%] min-w-42" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Recipe Name..."
          className="rounded-full px-4 py-2 w-full bg-charcoal"
          value={searchParams}
          onChange={(event) => setSearchParams(event.target.value)}
        />
      </form>
      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-navLink" : "inactive-navLink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "active-navLink" : "inactive-navLink"
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
