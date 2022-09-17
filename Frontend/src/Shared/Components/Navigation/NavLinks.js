import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/shop">SHOP</NavLink>
      </li>
      <li>
        {/* <NavLink to="/collections">COLLECTIONS</NavLink> */}
      </li>
      <li>
        <NavLink to="/lookBook">LOOKBOOK</NavLink>
      </li>
      <li>
        <NavLink to="/news">NEWS</NavLink>
      </li>
      <li>
        <NavLink to="/sayHello">SAY HELLO</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
