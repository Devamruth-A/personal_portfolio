import styles from './HeroSection.module.css';
import Lottie from "lottie-react";
import astronautAnimation from "../assets/astronaut.json";

const HeroSection = ({ heroData }) => {
  return (
    <section id="home" className={`${styles.hero} container`}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>{heroData.title}</h1>
          <p className={styles.subtitle}>{heroData.subtitle}</p>
          <a href="#projects" className={styles.ctaButton}>View My Work</a>
        </div>
        <div className={styles.heroAnimation}>
          <Lottie animationData={astronautAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;