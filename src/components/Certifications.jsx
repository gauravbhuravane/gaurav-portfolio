"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Certifications.module.scss";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const certifications = [
  { title: "Introduction to Front End Development", issuer: "Simplilearn" },
  { title: "Introduction to Artificial Intelligence", issuer: "IBM" },
  { title: "Getting Started with Artificial Intelligence", issuer: "IBM" },
  { title: "Instagram Clone Bootcamp (HTML & CSS)", issuer: "DevTown" },
];

const achievements = [
  {
    title: "Runner-Up, National-Level Web Development Competition",
    year: "2025",
    description: "Showcased strong skills in designing and developing innovative web applications.",
  },
  {
    title: "Runner-Up, State-Level Web Development Competition",
    year: "2024",
    description: "Demonstrated creativity and technical expertise in web development.",
  },
];

const academicAchievements = [
  {
    title: "Tech Carnival 2024 - Code IT Competition Head",
    year: "2024",
    description: "Led and organized the PowerPoint presentation competition at Tech Carnival 2024.",
  },
  {
    title: "Outstanding Academic Performance",
    year: "2024",
    description: "Achieved 9.56 CGPA in BSc Computer Science.",
  },
  {
    title: "Project Work & Industrial Training",
    year: "2022-2024",
    description: "Completed multiple projects using React and PHP.",
  },
];

export default function Certifications() {
  return (
    <section className={styles.certifications}>
      <div className={styles.background} />
      <div className={styles.container}>
        <h2>🎓 Certifications & 🏆 Achievements</h2>

        <Tabs defaultValue="certifications">
          <TabsList>
            <TabsTrigger value="certifications">📜 Certifications</TabsTrigger>
            <TabsTrigger value="achievements">🏅 Achievements</TabsTrigger>
            <TabsTrigger value="academics">📘 Academics</TabsTrigger>
          </TabsList>

          <TabsContent value="certifications">
            <motion.div
              className={styles.grid}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <AnimatePresence>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className={styles.card}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4>{cert.title}</h4>
                    <p>
                      <span>Issued by:</span> {cert.issuer}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements">
            <motion.div className={styles.grid}>
              <AnimatePresence>
                {achievements.map((ach, index) => (
                  <motion.div
                    key={index}
                    className={styles.card}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4>{ach.title}</h4>
                    <span className={styles.year}>{ach.year}</span>
                    <p>{ach.description}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>

          <TabsContent value="academics">
            <motion.div className={styles.grid}>
              <AnimatePresence>
                {academicAchievements.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.card}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4>{item.title}</h4>
                    <span className={styles.year}>{item.year}</span>
                    <p>{item.description}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
