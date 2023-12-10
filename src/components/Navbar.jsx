import React, { useState } from "react";
import logo from "../logo.png";
import navItems from "../constants";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`nav_elem ${menuOpen ? "menu-open" : ""}`}>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className={`menu_items ${menuOpen ? "show-menu" : ""}`}>
          {navItems.map((item) => {
            return (
              <NavLink to={item.link} className='res-menu' key={item.id} onClick={toggleMenu}>
                {item.name}
              </NavLink>
            );
          })}
        </div>
        <div className="button_items" id="mbl">
          <NavLink to="/plants">Shop Now</NavLink>
          <NavLink
            to="/signin"
            className="button button_green"
            style={{ color: "white" }}
          >
            Sign In
          </NavLink>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </>
  );
}
