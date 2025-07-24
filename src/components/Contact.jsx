import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_83z0i5a',
        'template_6obboyv',
        form.current,
        '6DJSG-M5-djkXod7e'
      )
      .then(
        () => {
          toast.success('✅ Email sent successfully! I’ll get back to you soon 😊');
          form.current.reset(); // Optional: reset form fields
        },
        (error) => {
          toast.error('❌ Something went wrong. Please try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className={styles.inputField}
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className={styles.inputField}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={styles.inputField}
          rows="5"
          required
        ></textarea>
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}
        />
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>

      {/* Toast Popup Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
}

export default Contact;
