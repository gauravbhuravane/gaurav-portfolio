import React, { useEffect } from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/_global.scss';

function App() {
  // Scroll to top on page refresh
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <ThemeProvider>
      <Navbar />

      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><Education /></div>
      <div id="certifications"><Certifications /></div>
      <div id="contact"><Contact /></div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
