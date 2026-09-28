import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

import logo from "../assets/Copy of download__23_-removebg-preview.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(
      searchText.trim()
        ? `/search?q=${encodeURIComponent(searchText.trim())}`
        : "/search"
    );

    setOpenMenu(null);
  };

  const specialOccasions = [
    { name: "Birthday Invitations", path: "birthday-invitations" },
    { name: "Puperty Cards", path: "puperty-cards" },
    { name: "Luxury Invitations", path: "luxury-invitations" },
    { name: "Ear Boring Cards", path: "ear-boring-cards" },
    { name: "Engagement Cards", path: "engagement-cards" },
    { name: "House Warming", path: "house-warming" },
    { name: "Anniversary Cards", path: "anniversary-cards" },
  ];

  const themeCards = [
    { name: "Beach Theme Cards", path: "beach-theme-cards" },
    { name: "Bride Theme Cards", path: "bride-theme-cards" },
    { name: "Box Cards", path: "box-cards" },
    { name: "Single Sheet Cards", path: "single-sheet-cards" },
  ];

  const digitalInvitations = [
    { name: "Whatsapp Cards", path: "whatsapp-cards" },
    { name: "Save the Date Cards", path: "save-the-date-cards" },
  ];

  return (
    <header className="site-header">

      <div className="top-header">

        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Wedding Invitation Logo" />

          <span className="brand-text">
            <b>Cherish</b>
            <em>Wed Knot Craft</em>
          </span>
        </Link>

        <div className="header-actions">

          {/* SEARCH */}
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button type="submit" className="search-button">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>
          </form>

          {/* LOGIN */}
          <Link
            to="/login"
            className="header-icon login-icon"
            onClick={closeMenu}
            aria-label="Login"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 21c.5-4 3-6 7-6s6.5 2 7 6" />
            </svg>
          </Link>

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="header-icon"
            onClick={closeMenu}
            aria-label="Wishlist"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
            </svg>
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="header-icon"
            onClick={closeMenu}
            aria-label="Cart"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M3 4h2l2.2 11h11.3l2-8H6" />
            </svg>
          </Link>

        </div>
      </div>

      <nav className="main-nav">

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/wedding-cards" onClick={closeMenu}>
          Wedding Invitation
        </Link>

        {/* SPECIAL OCCASIONS */}
        <div className="nav-dropdown">

          <button
            className="nav-dropdown-button"
            onClick={() => toggleMenu("special")}
          >
            Special occasions
          </button>

          {openMenu === "special" && (
            <div className="dropdown-menu">

              {specialOccasions.map((item) => (
                <Link
                  key={item.path}
                  to={`/special-occasions/${item.path}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          )}

        </div>

        {/* THEME CARDS */}
        <div className="nav-dropdown">

          <button
            className="nav-dropdown-button"
            onClick={() => toggleMenu("theme")}
          >
            Theme Cards
          </button>

          {openMenu === "theme" && (
            <div className="dropdown-menu">

              {themeCards.map((item) => (
                <Link
                  key={item.path}
                  to={`/theme-cards/${item.path}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          )}

        </div>

        <Link to="/scroll-invitation" onClick={closeMenu}>
          Scroll Invitation
        </Link>

        {/* DIGITAL INVITATION */}
        <div className="nav-dropdown">

          <button
            className="nav-dropdown-button"
            onClick={() => toggleMenu("digital")}
          >
            Digital Invitation
          </button>

          {openMenu === "digital" && (
            <div className="dropdown-menu">

              {digitalInvitations.map((item) => (
                <Link
                  key={item.path}
                  to={`/digital-invitations/${item.path}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          )}

        </div>

      </nav>
    </header>
  );
}

export default Navbar;