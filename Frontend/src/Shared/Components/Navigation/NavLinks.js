import React from "react";
import { NavLink } from "react-router-dom";

// import { AuthContext } from "../../Context/auth-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/shop">SHOP</NavLink>
      </li>
      {/* <li>
        <NavLink to="/aboutUs">ABOUT US</NavLink>
      </li> */}
      <li>
        <NavLink to="/lookBook">LOOKBOOK</NavLink>
      </li>
      <li>
        <NavLink to="/news">NEWS</NavLink>
      </li>
      <li>
        <NavLink to="/sayHello">SAY HELLO</NavLink>
      </li>
      {/* {!auth.isLoggedIn && ( */}

      {/* // )} */}
      {/* {auth.isLoggedIn && (
        <li>
          <button onClick={}>LOGOUT</button>
        </li>
      )} */}
    </ul>
  );
};

export default NavLinks;
