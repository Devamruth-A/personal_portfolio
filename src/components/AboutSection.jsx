import styles from './AboutSection.module.css';
import { motion } from 'framer-motion';

const AboutSection = ({ aboutData }) => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="sectionTitle">About Me</h2>
          <div className={styles.contentWrapper}>
            <img src={aboutData.image} alt="Profile" className={styles.profileImage} />
            <p className={styles.description}>{aboutData.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;