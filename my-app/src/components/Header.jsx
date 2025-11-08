import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className={`${styles.navLink} ${styles.active}`}>
          Home
        </Link>
        <Link to="/catalog" className={styles.navLink}>
          Catalog
        </Link>
      </nav>
        
        <div className={styles.utilityContainer}>
        <form className={styles.searchForm}>
          <input 
            type="text" 
            placeholder="Enter the perfume name" 
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}> Search
          </button>
        </form>

        <Link to="/cart" className={styles.navLink}>
          <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
        </Link>
      </div>
      
    </header>
  );
}

export default Header;