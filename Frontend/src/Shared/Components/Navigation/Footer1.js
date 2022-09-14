import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer1.css";

const Footer1 = (props) => {
  return (
    <ul className="footer-links">
      <li>
        <NavLink to="/aboutUs" exact>
          About Us
        </NavLink>
      </li>
      <li>
        <a href="#123">My Account</a>
      </li>
      <li>
        <a href="#234">Terms and Conditions</a>
      </li>
    </ul>
  );
};

export default Footer1;
