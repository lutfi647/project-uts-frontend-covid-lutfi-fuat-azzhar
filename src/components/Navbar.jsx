import './Navbar.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <img src="/logo-covid.png" alt="Logo" className="navbar__logo-img" />
          <span>Covid-19</span>
        </div>

        {/* Menu */}
        <nav className="navbar__menu">
          <a href="#">Home</a>
          <a href="#">Data Pandemi</a>
          <a href="#">Tentang Kami</a>
        </nav>

        {/* Social Media */}
        <div className="navbar__social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </header>
  );
}
