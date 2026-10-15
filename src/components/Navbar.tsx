import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/booking", label: "Booking" },
    { to: "/shop", label: "Shop" },
    { to: "/blog", label: "Blog" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `navbar__link${isActive ? " navbar__link--active" : ""}`;

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <NavLink
          to="/"
          className="navbar__logo"
          onClick={() => setIsOpen(false)}
        >
          RubyBloom
        </NavLink>

        <div className="navbar__links navbar__links--desktop">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar__language">
          <LanguageSelector />
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar__sr-only">
            {isOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span className="navbar__toggle-lines">
            <span
              className={`navbar__toggle-line ${
                isOpen ? "navbar__toggle-line--top-open" : ""
              }`}
            />
            <span
              className={`navbar__toggle-line ${
                isOpen ? "navbar__toggle-line--middle-open" : ""
              }`}
            />
            <span
              className={`navbar__toggle-line ${
                isOpen ? "navbar__toggle-line--bottom-open" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}
      >
        <div className="navbar__links navbar__links--mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
            <div className="navbar__mobile-language">
              <LanguageSelector />
            </div>
        </div>
      </div>
    </nav>
  );
}
