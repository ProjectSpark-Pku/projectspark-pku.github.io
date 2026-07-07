import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Navbar({ session }) {
  const navRef = useRef(null);
  const highlightRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    const nav = navRef.current;
    const highlight = highlightRef.current;

    if (!nav || !highlight) return;

    const links = nav.querySelectorAll('a');

    const handleMouseEnter = (e) => {
      const link = e.currentTarget;
      const rect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();

      highlight.style.width = `${rect.width + 12}px`;
      highlight.style.left = `${rect.left - navRect.left - 6}px`;
    };

    const handleMouseLeave = () => {
      highlight.style.width = '0';
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
    });

    nav.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
      nav.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/projectspark-pku/Images/SVG/project_spark_logo.svg" alt="Project Spark Logo" />
          </Link>
        </div>

        <nav className="nav-links" ref={navRef}>
          <div className="highlight" ref={highlightRef}></div>
          <Link to="/about">About Us</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/transparency">Transparency</Link>
          <Link to="/members">Members</Link>
        </nav>

        <div className="nav-actions">
          {session ? (
            <button type="button" className="btn-auth btn-login" onClick={logout}>Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn-auth btn-login">Login</Link>
              <Link to="/signup" className="btn-auth btn-signup">Sign Up</Link>
            </>
          )}
          <button type="button" className="btn-donate">Donate</button>
        </div>

        <div className="mobile-actions">
          <button type="button" className="btn-donate mobile-donate">Donate</button>
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </button>
        </div>
      </header>

      <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/our-work" onClick={closeMenu}>Our Work</Link>
        <Link to="/impact" onClick={closeMenu}>Impact</Link>
        <Link to="/transparency" onClick={closeMenu}>Transparency</Link>
        <Link to="/members" onClick={closeMenu}>Members</Link>

        <div className="menu-actions">
          {session ? (
            <button type="button" className="btn-auth btn-login" onClick={logout}>Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn-auth btn-login" onClick={closeMenu}>Login</Link>
              <Link to="/signup" className="btn-auth btn-signup" onClick={closeMenu}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
