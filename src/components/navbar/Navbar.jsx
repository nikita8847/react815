import React from "react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import links from "./navlinks";
import { Badge, Button } from "react-bootstrap";
import { CartContext } from "../../App";

function Navbar() {
  const navigator = useNavigate();
  const { cart, setCart } = React.useContext(CartContext);

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
      <Button>
        Cart <Badge>{cart && cart.items.length}</Badge>
      </Button>
      <Button onClick={() => navigator(1)}>Forward</Button>
    </div>
  );
}

export default Navbar;
