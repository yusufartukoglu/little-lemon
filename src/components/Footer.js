/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../icons_assets/Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="little lemon logo" />
      <div className="footer-content">
        <div className="footer-nav">
          <p className="footer-head">Navigation</p>
          <Link to="/" className="footer-item">
            Home
          </Link>
          <a href="#" className="footer-item">
            About
          </a>
          <a href="#" className="footer-item">
            Menu
          </a>
          <Link to="/booking">Reservations</Link>
          <a href="#" className="footer-item">
            Order Online
          </a>
          <a href="#" className="footer-item">
            Login
          </a>
        </div>
        <div className="footer-contact">
          <p className="footer-head">Contact</p>
          <a href="#" className="footer-item">
            Address
          </a>
          <a href="#" className="footer-item">
            Phone Number
          </a>
          <a href="#" className="footer-item">
            E-mail
          </a>
        </div>
        <div className="footer-social">
          <p className="footer-head">Social Media</p>
          <a href="#" className="footer-item">
            Facebook
          </a>
          <a href="#" className="footer-item">
            Instagram
          </a>
          <a href="#" className="footer-item">
            Tiktok
          </a>
          <a href="#" className="footer-item">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
