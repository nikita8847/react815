import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import links from "./navlinks";

function Navbar() {
  return (
    <div className="m-navbar-wrapper">
      {links.map(link => (
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={link.path}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
