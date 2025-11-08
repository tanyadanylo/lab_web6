import React from 'react';
import styles from './Select.module.css';

function Select({ label, name, options }) {
  
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={name} className={styles.selectLabel}>
        {label}
      </label>
      
      <select name={name} id={name} className={styles.selectElement}>
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
          >
            {option.label}
          </option>
        ))}
        
      </select>
    </div>
  );
}

export default Select;