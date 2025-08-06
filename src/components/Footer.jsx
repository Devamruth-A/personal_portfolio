import styles from './Footer.module.css';

const Footer = ({ name }) => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 {name}. All Rights Reserved in Pullur, Kerala.</p>
    </footer>
  );
};

export default Footer;