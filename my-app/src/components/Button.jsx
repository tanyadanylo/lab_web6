import React from 'react';
import styles from './Button.module.css';

function Button({ children, onClick }) {
    return (
    <button 
      type="button" 
      className={styles.myButton} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;