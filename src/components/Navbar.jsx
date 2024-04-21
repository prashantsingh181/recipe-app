import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex gap-3 sm:gap-6">
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
    )
}

export default Navbar