import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from '../styles/ThemeToggle.module.scss';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={styles.toggle}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggle;
