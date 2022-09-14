import React from "react";

import "./NavHeader.css";

const NavHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default NavHeader;
