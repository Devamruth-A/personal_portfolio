import styles from './ProjectsSection.module.css';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="sectionTitle">Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;