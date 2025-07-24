import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebookF,
  FaMediumM,
  FaStackOverflow,
} from "react-icons/fa";
import styles from "../styles/Hero.module.scss";
import heroGif from "../assets/images/giphy.gif"; // ← local GIF import
import { FlipWords } from "./FlipWords"; // adjust path if needed


// Social links data
const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/gauravbhuravane" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/gaurav-bhuravane" },
  { icon: <FaEnvelope />, url: "mailto:bhuravanegaurav@gmail.com" },
];

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* ---------- LEFT TEXT COLUMN ---------- */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       <h1>
  Hi all, I'm&nbsp;
  <FlipWords
    words={[
      "Gaurav ",
      "Developer ",
      "Coder ",
      "Explorer ",
    ]}
    className={styles.name}
  />
</h1>



       <p className={styles.subtitle}>
  A passionate <strong>Full‑Stack Developer</strong> 🌟 experienced in building responsive web and mobile apps using{" "}
  <span className={styles.highlight}>HTML, CSS, JavaScript, React.js, and Node.js</span>. Focused on clean code, performance, and great user experiences.
</p>


        {/* ---- Social Icons ---- */}
        <div className={styles.socialRow}>
          {socialLinks.map(({ icon, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* ---- CTA Buttons ---- */}
        <div className={styles.actions}>
          <a href="#contact" className={styles.primaryBtn}>
            Contact&nbsp;Me
          </a>
          <a
  href="/Gaurav-Bhuravane-Resume.pdf"
  download="Gaurav-Bhuravane-Resume.pdf"
  className={styles.primaryBtn}
>
  Download My Resume
</a>


        </div>
      </motion.div>

      {/* ---------- RIGHT ILLUSTRATION (GIF) ---------- */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <img
          src={heroGif}
          alt="Developer illustration"
          className={styles.illustration}
        />
      </motion.div>
    </section>
  );
}

export default Hero;