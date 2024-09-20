import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [navbarDark, setNavbarDark] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarDark(true);
    } else {
      setNavbarDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarDark ? 'navbar-dark' : ''}`}>
      <a href="#" className="logo">Lucas <span>Franco</span></a>
      <ul className='navlist'>
        <li><a className="nav-link" href="#hero">Home</a></li>
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#projects">Projects</a></li>
        <li><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
      <div className="top-btn">
        <a href="#contact" className="h-btn">Contact Me</a>
      </div>
    </nav>
  );
}
