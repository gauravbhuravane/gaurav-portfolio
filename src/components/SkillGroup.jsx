// src/components/SkillGroup.jsx
import React from "react";
import styles from "../styles/Skills.module.scss";

const SkillGroup = ({ title, skills }) => {
  return (
    <div className={styles.skillGroup}>
      <h4 className={styles.groupTitle}>{title}</h4>
      <ul className={styles.skillList}>
        {skills.map(({ name, percent }) => (
          <li key={name}>
            <div className={styles.skillHeader}>
              <span>{name}</span>
              <span>{percent}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: percent }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;
