import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import links from "./navlinks";
import { Button } from "react-bootstrap";

function Navbar() {
  const navigator = useNavigate();

  return (
    <div className="m-navbar-wrapper">
      <Button onClick={() => navigator(-1)}>Back</Button>
      {links.map(link => (
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={link.path}>
          {link.label}
        </NavLink>
      ))}
      <Button onClick={() => navigator(1)}>Forward</Button>
    </div>
  );
}

export default Navbar;
