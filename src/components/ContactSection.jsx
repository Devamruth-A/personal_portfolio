import styles from './ContactSection.module.css';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const myEmailAddress = "devamruth6282@gmail.com"; 

  return (
    <section id="contact" className={styles.contact}>
       <motion.div 
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="sectionTitle">Get In Touch</h2>
        <p className={styles.contactText}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me via email or connect with me on social media.
        </p>
        <a href={`mailto:${myEmailAddress}`} className={styles.emailButton}>Email Me</a>
        <div className={styles.socialsContainer}>
          <div className={styles.socialLinks}>
            <a href={`mailto:${myEmailAddress}`} className={styles.socialLink} aria-label="Email me"><FaEnvelope /></a>
            <a href="https://www.instagram.com/de_va_mr_uth_/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/devamruth-a-7a65b832a/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;