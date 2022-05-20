import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import links from "./links";

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      {links.map(link => (
        <NavLink key={link.id} to={link.path}>
          <div class="sidebar-link">
            {link.icon}
            <h6>{link.label}</h6>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
