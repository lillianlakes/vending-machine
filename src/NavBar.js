import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/cashews">
        Cashews
      </NavLink>
      <NavLink exact to="/popcorn">
        Popcorn
      </NavLink>
      <NavLink exact to="/water">
        Water
      </NavLink>
    </nav>
  );
}

export default NavBar;
