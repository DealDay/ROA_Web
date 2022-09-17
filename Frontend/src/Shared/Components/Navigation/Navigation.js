import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
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
import { BiPhone } from "react-icons/bi";

const Navigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showCreateAccountPage, setShowCreateAccountPage] = useState(false);
  const [showForgotPasswordPage, setShowForgotPasswordPage] = useState(false);


  const closeLoginPage = () => {
    setShowLoginPage(false);
  };

  const openLoginPage = () => {
    setShowLoginPage(true);
    setShowCreateAccountPage(false);
    setShowForgotPasswordPage(false);
  };

  const closeCreateAccountPage = () => {
    setShowCreateAccountPage(false);
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
    setPasswordMatch('');
    setAddress('');
    setErr('');
  };

  const openCreateAccountPage = () => {
    setShowLoginPage(false);
    setShowCreateAccountPage(true);
  };

  const closeForgotPasswordPage = () => {
    setShowForgotPasswordPage(false);
  };

  const openForgotPasswordPage = () => {
    setShowForgotPasswordPage(true);
    setShowLoginPage(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({})
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(false)
  const [err, setErr] = useState('')
  // const [entryPass, setEntryPass] = useState(false)

  const authenticate = () =>{
    axios.post('http://localhost:8000/user/login', {
      'email': email, 
      'password': password
    }).then(res => {
      if (res.data['access_token']) {
        axios.get(`http://localhost:8000/user/${email}`).then(res => {
          setUserDetails(res.data)  
        })
        setShowLoginPage(false)
        setIsLoggedIn(true)
        setErr('')
      }
      else setErr(res.data['error'])
    }).catch(() => setErr('Please enter email and password'))
  }
  const createUser = () =>{
    console.log('yes')
    console.log(phoneNumber)
    axios.post('http://localhost:8000/user/signup', {
      'fullname': fname + ' ' + lname,
      'email': email,
      'password': password,
      'phone_num': phoneNumber,
      'address': address
    }).then(res =>{
      if (res.data['access_token']) {
        axios.get(`http://localhost:8000/user/${email}`).then(res => {
          setUserDetails(res.data)  
        })
        closeCreateAccountPage()
        setIsLoggedIn(true)
        setErr('')
      }
      else setErr(res.data['error'])
    }).catch(() => setErr('Please completes all fields'))
  }

  const logout = () =>{
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
    setUserDetails({})
  }
  
  const checkPassword = () =>{
    var pass2 = document.getElementById('password').value;
    if (pass2 === password) {
      setPasswordMatch(true)
    }
  }

  // useEffect = () => {
  //   //console.log('yes')
  //   if(fname && lname && email && passwordMatch && phoneNumber && address)setEntryPass(false);
  //   // else setEntryPass(true)
  // }


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
                }} onClick={authenticate}
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
                onClick = {openForgotPasswordPage}
              >
                Forgot Password?
              </button>
              <button
                style={{
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                }}
                onClick = {openCreateAccountPage}
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
              id="email" onChange={event => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="input_field"
              type="password"
              id="password" onChange={event => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
            {err && (
              <label
              className="label"
            >{err}</label>
            )}
        </div>
      </Modal>
      <Modal
        className="modal_display"
        header="Create Account"
        show={showCreateAccountPage}
        onCancel={closeCreateAccountPage}
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
                onClick={createUser}
              >
                Create Account
              </button>
            </div>
            <div>
              <button
                style={{
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                }}
                onClick={openLoginPage}
              >
                Already have an account? Sign in
              </button>
            </div>
          </React.Fragment>
        }
      >
        <div className="input">
          <div>
            <input
              className="input_field"
              type="text"
              name="first_name" onChange={event => setFname(event.target.value)}
              placeholder="First name"
            />
            <input
              className="input_field"
              type="text"
              name="last_name" onChange={event => setLname(event.target.value)}
              placeholder="Last name"
            />
          </div>
          <div>
            <input
              className="input_field"
              type="email"
              name="email" onChange={event => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="input_field"
              type="password"
              name="password" onChange={event => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="input_field"
              type="password"
              id="password" onChange={checkPassword}
              placeholder="Re-type password"
            />
          </div>
          <div>
            <input
              className="input_field"
              type="number"
              onChange={event => setPhoneNumber(event.target.value)}
              placeholder="Phone number"
            />
          </div>
          <div>
            <input
              className="input_field"
              type="text"
              onChange={event => setAddress(event.target.value)}
              placeholder="Address"
            />
          </div>
          {err && (
              <label
              className="label"
            >{err}</label>
            )}
        </div>
      </Modal>
      <Modal
        className="modal_display"
        header="Reset Password"
        show={showForgotPasswordPage}
        onCancel={closeForgotPasswordPage}
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
                Send reset link
              </button>
            </div>
            <div>
              <button
                style={{
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                }}
                onClick = {openLoginPage}
              >
                Back to sing in
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
            <React.Fragment>
            <div className="login_button">
          <label>Welcome, {userDetails['fullname']}</label>
          <button onClick={logout} data-tip data-for="logoutTip">
          <GrLogout size={20} />
          </button>
          <ReactTooltip id="logoutTip" place="bottom" effect="solid">Logout</ReactTooltip></div>
          </React.Fragment>
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
            <React.Fragment>
              <div className="login_button__header">
            <label>Welcome, {userDetails['fullname']}</label>
            <button onClick={logout} data-tip data-for="logoutTip">
            <GrLogout size={20} />
            </button>
            <ReactTooltip id="logoutTip" place="bottom" effect="solid">Logout</ReactTooltip></div>
            </React.Fragment>
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
