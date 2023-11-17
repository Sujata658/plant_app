import logo from "../logo.png";
import navItems from "../constants";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav_elem">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="menu_items">
          {navItems.map((item) => {
            return (
              <NavLink to={item.link} key={item.id}>
                {item.name}
              </NavLink>
            );
          })}
        </div>
        <div className="button_items">
          <a href="/plants">Shop Now</a>
          <div className="button button_green">Sign Up</div>
        </div>
      </div>
    </>
  );
}
