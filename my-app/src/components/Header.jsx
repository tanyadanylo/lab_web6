import React from 'react';
import logo from '../assets/logo-icon.jpg'; 
import styles from './Header.module.css';
import cartIcon from '../assets/cartIcon.png'

function Header() {
  return (
    <header className={styles.header}>
      
      <div className={styles.logoContainer}>
        <img src={logo} alt="Scentoria Logo" className={styles.logo} />
      </div>

      <nav className={styles.nav}>
        <a href="#" className={`${styles.navLink} ${styles.active}`}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          Catalog
        </a>
      </nav>

      <div className = {styles.cartContainer}>
        <a href="#" className={styles.navLink}>
          <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
        </a>
      </div>
      
    </header>
  );
}

export default Header;