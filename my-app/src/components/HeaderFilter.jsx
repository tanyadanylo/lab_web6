import React from 'react';
import styles from './HeaderFilter.module.css';
import Select from './Select'; 
import Button from './Button';

const sexOptions = [
  { value: 'woman', label: 'Woman' },
  { value: 'man', label: 'Man' }
];

const countryOptions = [
  { value: 'france', label: 'France' },
  { value: 'usa', label: 'USA' }
];

const brandOptions = [
  { value: 'dior', label: 'Dior' },
  { value: 'chanel', label: 'Chanel' },
  { value: 'herrera', label: 'Carolina Herrera' },
  { value: 'givenchy', label: 'Givenchy' },
  { value: 'prada', label: 'Prada' }
];

function HeaderFilter() {
    return(
        <section className={styles.filterSection}>

            <div className={styles.filterBar}>
                
                <Select 
                  label="Man or Woman" 
                  name="filter-sex" 
                  options={sexOptions} 
                />

                <Select 
                  label="Made in" 
                  name="filter-country" 
                  options={countryOptions} 
                />

                <Select 
                  label="Brand" 
                  name="filter-brand" 
                  options={brandOptions} 
                />
                
                <div className={styles.applyButtonContainer}>
                  <Button>
                      Apply
                  </Button>
                </div>
            </div>
        
        </section>
    )
}

export default HeaderFilter;