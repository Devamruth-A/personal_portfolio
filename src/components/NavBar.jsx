import styles from './NavBar.module.css';

const NavBar = ({ navLinks, name }) => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <a href="#" className={styles.logo}>{name}</a>
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className={styles.navLinkItem}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;