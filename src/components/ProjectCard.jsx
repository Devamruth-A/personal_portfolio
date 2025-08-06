import styles from './ProjectCard.module.css';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -10 }}
    >
      <img src={project.imgSrc} alt={project.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tech.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
        </div>
        <div className={styles.links}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;