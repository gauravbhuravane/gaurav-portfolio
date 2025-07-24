// src/components/Footer.jsx
import React from 'react';
import styles from '../styles/Footer.module.scss';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Left Info */}
        <div className={styles.left}>
          <h3>Gaurav Bhuravane</h3>
          <p>Frontend Developer | Java Enthusiast</p>
        </div>

        {/* Navigation Links */}
        <div className={styles.center}>
          <ul className={styles.links}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={styles.right}>
          <a href="https://github.com/gauravbhuravane" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/gaurav-bhuravane" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:gaurav@example.com"><FaEnvelope /></a>
        </div>
      </div>

      {/* Bottom Info */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Gaurav Bhuravane. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
