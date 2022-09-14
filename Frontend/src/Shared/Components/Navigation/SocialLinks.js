import "./SocialLinks.css";
// import Login from "../../../Pages/Login";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiShoppingCart,
} from "react-icons/fi";

const SocialLinks = () => {
  return (
    <ul className="social-nav-links">
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
        <a href="#linkedin" target="_blank" rel="noreferrer">
          <FiLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCfYTe1_5mJQI_ModD9gOomQ"
          target="_blank"
          rel="noreferrer"
        >
          <FiYoutube />
        </a>
      </li>
      <li>
        <a href="#cart">
          <FiShoppingCart />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
