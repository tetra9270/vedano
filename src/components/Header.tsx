import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'French' },
  { code: 'ar', label: 'Arabic' },
];

export const Header = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const { language, setLanguage, t } = useLanguage();
  const selectedLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
        <button 
          className={`menu-btn ${isMobileMenuOpen ? 'active' : ''}`} 
          aria-label={t('header.menu')}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="menu-text">{t('header.menu')}</span>
        </button>
        <button className="search-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <nav className="header-nav">
          <a href="/" className="nav-link">{t('header.home')}</a>
          <a href="/about" className="nav-link">{t('header.aboutUs')}</a>
          <a href="/blogs" className="nav-link">{t('header.blogs')}</a>
          <a href="/process" className="nav-link">Our Process</a>
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
                  onClick={() => { setLanguage(lang.code as any); setDropdownOpen(false); }}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="reserve-btn" onClick={onOpenBooking}>{t('header.bookConsultant')}</button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <nav className="mobile-nav">
            <a href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('header.home')}</a>
            <a href="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('header.aboutUs')}</a>
            <a href="/blogs" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('header.blogs')}</a>
            <a href="/process" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Our Process</a>
            
            <div className="mobile-lang-selector">
              {LANGUAGES.map(lang => (
                <button 
                  key={lang.code}
                  className={`mobile-lang-btn ${language === lang.code ? 'active' : ''}`}
                  onClick={() => { setLanguage(lang.code as any); setIsMobileMenuOpen(false); }}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button className="mobile-reserve-btn" onClick={() => { onOpenBooking(); setIsMobileMenuOpen(false); }}>{t('header.bookConsultant')}</button>
          </nav>
        </div>
      )}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-overlay-content">
            <button className="close-search-btn" onClick={() => setIsSearchOpen(false)}>✕</button>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search / البحث / Rechercher..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <div className="search-results-box">
                {['Home', 'About Us', 'Blogs', 'Our Process']
                  .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((result, idx) => (
                  <a 
                    key={idx} 
                    href={result === 'Home' ? '/' : result === 'Our Process' ? '/process' : `/${result.toLowerCase().replace(' ', '')}`} 
                    className="search-result-link"
                  >
                    {result === 'Home' ? t('header.home') : result === 'About Us' ? t('header.aboutUs') : result === 'Blogs' ? t('header.blogs') : 'Our Process'}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
