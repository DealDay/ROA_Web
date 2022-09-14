import React from "react";
// import { NavLink } from "react-router-dom";
import "./SocialLinksBottom.css";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

const SocialLinksBottom = (props) => {
  return (
    <ul className="social-nav-links-bottom">
      <ul className="links">
        <li>
          <a
            href="https://www.instagram.com/roahandcrafted/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/roahandcrafted/"
            target="_black"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/theroahandcrafted?_rdc=1&_rdr"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook />
          </a>
        </li>
        <li>
          <a href="#linkedin">
            <FiLinkedin />
          </a>
        </li>
        <li className="padding">
          <a
            href="https://www.youtube.com/channel/UCfYTe1_5mJQI_ModD9gOomQ"
            target="_blank"
            rel="noreferrer"
          >
            <FiYoutube />
          </a>
        </li>
      </ul>
      <li className="padding">Tel: +234 906 000 5186</li>
      <li className="padding">E-mail: info@roahandcrafted.com</li>
      <li className="padding">
        <BiCopyright />
        2022 ROA Handcrafted
      </li>
    </ul>
  );
};

export default SocialLinksBottom;
