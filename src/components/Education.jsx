import React from 'react';
import styles from '../styles/Education.module.scss';

function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2 className={`${styles.title} ${styles.fadeSlideIn}`}>Education</h2>

      <div className={styles.timeline}>
        <div className={`${styles.card} ${styles.slideInLeft}`}>
          <h3>MCA – Finolex Academy of Management & Technology</h3>
          <span>2024 – 2026 (Pursuing Final Year)</span>
          <p>Relevant coursework: Data Structures, Web Technologies</p>
        </div>

        <div className={`${styles.card} ${styles.slideInRight}`}>
          <h3>B.Sc. in Computer Science – ASP College, Devrukh</h3>
          <span>Graduated with 9.56 CGPA — 2024</span>
        </div>

        <div className={`${styles.card} ${styles.slideInLeft}`}>
          <h3>HSC (12th) – MSBSHSE</h3>
          <span>63.69% — Meenatai Thakare Science Jr. College, Sadavali (2020)</span>
        </div>

        <div className={`${styles.card} ${styles.slideInRight}`}>
          <h3>SSC (10th) – MSBSHSE</h3>
          <span>81.60% — Dadasaheb Sarfare Vidyalaya, Burambi (2018)</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
