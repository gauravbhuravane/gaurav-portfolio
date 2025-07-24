import React from 'react';
import styles from '../styles/About.module.scss';
import { motion } from 'framer-motion';

const techStack = [
  "JavaScript", "React", "Node", "MongoDB",
  "HTML5", "CSS3", "Git"
];

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          About <span className={styles.meHighlight}>Me</span>
        </motion.h2>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi! I'm <span className="accent">Gaurav Bhuravane</span>, a passionate full-stack web developer.
          I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        </motion.p>

        <motion.ul
          className={styles.techChips}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </motion.ul>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.year}>2023</div>
            <p>Completed B.Sc. in Computer Science from ASP College, Devrukh.</p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.year}>2024</div>
            <p>Started MCA at Finolex Academy of Management and Technology.</p>
          </div>
        </div>

        <ul className={styles.softSkills}>
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Adaptability</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
