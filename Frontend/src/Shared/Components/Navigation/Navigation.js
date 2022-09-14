import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GrLogout } from "react-icons/gr";

import Modal from "../UIElements/Modal";
import NavHeader from "./NavHeader";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./Navigation.css";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const [showLoginPage, setShowLoginPage] = useState(false);

  const closeLoginPage = () => {
    setShowLoginPage(false);
  };

  const openLoginPage = () => {
    setShowLoginPage(true);
  };

  return (
    <React.Fragment>
      <Modal
        className="modal_display"
        header="Welcome to ROA Handcrafted"
        show={showLoginPage}
        onCancel={closeLoginPage}
        footer={
          <React.Fragment>
            <div>
              <button
                style={{
                  border: "none",
                  background: "rgb(210, 174, 109)",
                  width: "70%",
                  height: "30px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Sing In
              </button>
            </div>
            <div>
              <button
                style={{
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </button>
              <button
                style={{
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                Create Account
              </button>
            </div>
          </React.Fragment>
        }
      >
        <div className="input">
          <div>
            <input
              className="input_field"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="input_field"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
      </Modal>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
          <SocialLinks />
          {!isLoggedIn && (
            <button className="login_button" onClick={openLoginPage}>
              LOGIN
            </button>
          )}
          {isLoggedIn && (
            <button className="login_button" onClick={openLoginPage}>
              <GrLogout size={20} />
            </button>
          )}
        </nav>
      </SideDrawer>

      <NavHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/">
          <img
            src="Images/roa_black.png"
            className="main-navigation__logo"
            alt="ROA logo"
          />
        </Link>
        <nav>
          {!isLoggedIn && (
            <button className="login_button__header" onClick={openLoginPage}>
              LOGIN
            </button>
          )}
          {isLoggedIn && (
            <button className="login_button__header" onClick={openLoginPage}>
              <GrLogout size={20} />
            </button>
          )}
        </nav>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <nav className="main-navigation__right-header-nav">
          <SocialLinks />
        </nav>
      </NavHeader>
    </React.Fragment>
  );
};

export default Navigation;
