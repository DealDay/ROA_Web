import React from "react";

import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import SocialLinksBottom from "./SocialLinksBottom";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer-main">
      <div className="footer-text">
        <div className="signup-text">
          Sign up for our exclusive news and updates on offers and products.
        </div>
        <div>
          <ul className="email-submit">
            <li>
              <input
                className="email-input-field"
                type="email"
                placeholder="enter your email address here: bukola@xyz.xyz"
                id="cusEmail"
              />
            </li>
            <li>
              <button type="submit">Subscribe</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <Footer1 />
        </div>
        <div>
          <Footer2 />
        </div>
      </div>
      <div className="bottom">
        <SocialLinksBottom />
      </div>
    </footer>
  );
};

export default Footer;
