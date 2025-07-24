import React, { useEffect } from 'react';
import styles from '../styles/Skills.module.scss';

const technicalSkills = {
  Languages: [
    { name: "JavaScript", percent: "85%" },
    { name: "Java", percent: "75%" },
    { name: "Python", percent: "70%" },
  ],
  Frameworks: [
    { name: "React", percent: "80%" },
    { name: "Node.js", percent: "70%" },
    { name: "Express", percent: "65%" },
  ],
  Tools: [
    { name: "Git", percent: "85%" },
    { name: "GitHub", percent: "90%" },
    { name: "VS Code", percent: "95%" },
  ],
};

const additionalSkills = [
  { name: "Adobe Photoshop", percent: "80%" },
  { name: "Filmora Video Editing", percent: "75%" },
  { name: "Microsoft Word", percent: "85%" },
  { name: "Microsoft Excel", percent: "70%" },
];

const personalSkills = [
  { name: "Leadership", percent: "90%" },
  { name: "Teamwork", percent: "85%" },
  { name: "Communication", percent: "88%" },
  { name: "Time Management", percent: "80%" },
  { name: "Adaptability", percent: "85%" },
];

const SkillsSection = ({ title, skills }) => (
  <div className={styles.skillSection}>
    <h3 className={styles.subheading}>{title}</h3>
    <div className={styles.singleGrid}>
      {skills.map(({ name, percent }) => (
        <div key={name} className={styles.group}>
          <ul>
            <li>
              <div className={styles.skillInfo}>
                <span>{name}</span>
                <span>{percent}</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress} data-percent={percent}></div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  </div>
);

function Skills() {
  useEffect(() => {
    const progressElements = document.querySelectorAll(`.${styles.progress}`);
    progressElements.forEach((el) => {
      const percent = el.getAttribute('data-percent');
      el.style.setProperty('--progress', percent);
    });
  }, []);

  return (
    <div className={styles.skillsWrapper}>
      <div className={styles.background} />
      <h2 className={styles.sectionTitle}>Skills</h2>

      {/* Technical Skills */}
      <div className={styles.skillSection}>
        <h3 className={styles.subheading}>🧠 Technical Skills</h3>
        <div className={styles.skillGrid}>
          {['Languages', 'Frameworks'].map((category) => (
            <div key={category} className={styles.group}>
              <h4>{category}</h4>
              <ul>
                {technicalSkills[category].map(({ name, percent }) => (
                  <li key={name}>
                    <div className={styles.skillInfo}>
                      <span>{name}</span>
                      <span>{percent}</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} data-percent={percent}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.toolsGroup}>
          <div className={styles.group}>
            <h4>Tools</h4>
            <ul>
              {technicalSkills.Tools.map(({ name, percent }) => (
                <li key={name}>
                  <div className={styles.skillInfo}>
                    <span>{name}</span>
                    <span>{percent}</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} data-percent={percent}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Skills */}
      <SkillsSection title="🛠 Additional Skills & Tools" skills={additionalSkills} />

      {/* Personal Skills */}
      <SkillsSection title="🤝 Personal Skills" skills={personalSkills} />
    </div>
  );
}

export default Skills;
