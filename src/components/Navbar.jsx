import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    'home', 'about', 'skills', 'projects',
    'education', 'certifications', 'contact',
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Gaurav</div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={() => setMenuOpen(false)}
              activeClass={styles.active}
              spy={true}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <a
          href="https://github.com/gauravbhuravane"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gaurav-bhuravane"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Menu Toggle">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
