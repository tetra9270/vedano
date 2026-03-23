import { useState, useRef, useEffect } from 'react';
import './Header.css';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'French' },
  { code: 'ar', label: 'Arabic' },
];

export const Header = () => {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <header className="aman-header">
      <div className="header-left">
        <button className="menu-btn" aria-label="Menu">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="menu-text">Menu</span>
        </button>
        <button className="search-btn" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <nav className="header-nav">
          <a href="/about" className="nav-link">About Us</a>
          <a href="/blogs" className="nav-link">Blogs</a>
        </nav>
      </div>

      <div className="header-center">
        <a href="/" className="logo-container" aria-label="Vedano Home">
          <div className="logo-text">
            <span className="logo-main">VEDANO</span>
            <span className="logo-sub">BESPOKE</span>
          </div>
        </a>
      </div>

      <div className="header-right">
        <div className="language-selector" ref={dropdownRef}>
          <button
            className="lang-trigger"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
          >
            {selectedLang.label}
            <svg
              className={`lang-chevron ${dropdownOpen ? 'open' : ''}`}
              width="10" height="6" viewBox="0 0 10 6" fill="none"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="lang-dropdown" role="listbox">
              {LANGUAGES.filter(l => l.code !== selectedLang.code).map(lang => (
                <li
                  key={lang.code}
                  role="option"
                  className="lang-option"
                  onClick={() => { setSelectedLang(lang); setDropdownOpen(false); }}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="reserve-btn">Book a Consultant</button>
      </div>
    </header>
  );
};
