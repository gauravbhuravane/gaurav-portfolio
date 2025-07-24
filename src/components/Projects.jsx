import React from 'react';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../styles/Projects.module.scss';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      {/* Gradient Background */}
      <div className={styles.background}></div>

      <div className={styles.container}>
        <h2>🚀 Projects</h2>

        <div className={styles.grid}>
          {projects.map((proj) => (
            <div key={proj.title} className={styles.card}>
              <img src={proj.image} alt={proj.title} className={styles.projectImage} />

              <h3>{proj.title}</h3>
              <p className={styles.description}>{proj.description}</p>
              <p className={styles.tech}>{proj.tech.join(' • ')}</p>

              <div className={styles.links}>
                <a href={proj.github} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>
                <a href={proj.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
