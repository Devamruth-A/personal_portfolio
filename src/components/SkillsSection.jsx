import styles from './SkillsSection.module.css';
import { motion } from 'framer-motion';

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className={styles.skills}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="sectionTitle">My Skills</h2>
        <div className={styles.grid}>
          {skills.map(skill => (
            <div key={skill} className={styles.skillCard}>{skill}</div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;