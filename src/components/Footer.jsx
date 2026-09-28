import { Link } from "react-router-dom";
import "../styles/Footer.css";

import logo from "../assets/Copy of download__23_-removebg-preview.png";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <img
            src={logo}
            alt="Wedding Invitation Logo"
          />

          <strong>
            Largest Wedding
            <br />
            Cards Collection in
            <br />
            Chennai
          </strong>

          <p>Follow us with</p>

          <div className="socials">
            <span>◎</span>
            <span>f</span>
            <span>▶</span>
            <span>◉</span>
          </div>

        </div>

        {/* INFORMATION */}
        <div className="footer-column">

          <h3>Information</h3>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

          <Link to="/how-to-order">
            How to order wedding invitation online?
          </Link>

        </div>

        {/* QUICK ACCESS */}
        <div className="footer-column">

          <h3>Quick Access</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/wedding-cards">
            Wedding Cards
          </Link>

          <Link to="/wedding-cards">
            Hindu Wedding Cards
          </Link>

        </div>

        {/* CONTACT */}
        <div className="footer-column contact-column">

          <h3>Contact Us</h3>

          <p>
            ☎ +91 9876543210
          </p>

          <p>
            ✉ wedtype@weddingcards.com
          </p>

          <p>
            Operating hours: 10.00 Am
            <br />
            10.00Pm
          </p>

          <p>
            Monday - Sunday
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        © &nbsp; Wed knot craft india Private Limited.
        All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;