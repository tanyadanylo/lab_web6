import React from 'react';

import HeaderFilter from '../components/HeaderFilter';
import CatalogItemCard from '../components/CatalogItemCard'; 

import styles from './CatalogPage.module.css';

import parfum1 from '../assets/parLinterdit.png';
import parfum2 from '../assets/parDiorSavage.png';
import parfum3 from '../assets/parGoodGirl.png';
import parfum4 from '../assets/parBlueChanel.png';
import parfum5 from '../assets/parEauDeMoiselle.png';
import parfum6 from '../assets/parGabrielle.png';

const catalogProductsData = [
{
  id: 101,
  title: 'L’Interdit', 
  brand: 'GIVENCHY',
  type: 'eau de parfum', 
  volume: '125 ML', 
  price: '152',
  imageUrl: parfum1,
  madeIn: 'France',
  sex: 'Woman'
  },
  {
    id: 102,
    title: 'Sauvage',
    brand: 'DIOR',
    type: 'eau de parfum', 
    volume: '60 ML', 
    price: '95',
    imageUrl: parfum2,
    madeIn: 'France',
    sex: 'Man'
  }, 
  { 
    id: 103,
    title: 'Good Girl Blush',
    brand: 'CAROLINA HERRERA',
    type: 'eau de parfum', 
    volume: '80 ML', 
    price: '164',
    imageUrl: parfum3,
    madeIn: 'USA',
    sex: 'Woman'
  },
  { 
    id: 104,
    title: 'Bleu De Chanel',
    brand: 'CHANEL',
    type: 'eau de parfum', 
    volume: '150 ML', 
    price: '185',
    imageUrl: parfum4,
    madeIn: 'France',
    sex: 'Man'
  },
   { 
    id: 105,
    title: 'Eau De Moiselle Eau Florale',
    brand: 'GIVENCHY',
    type: 'parfum', 
    volume: '70 ML', 
    price: '82',
    imageUrl: parfum5,
    madeIn: 'France',
    sex: 'Woman'
  },
  { 
    id: 106,
    title: 'Gabrielle',
    brand: 'CHANEL',
    type: 'hair fragrance mist', 
    volume: '40 ML', 
    price: '71',
    imageUrl: parfum6,
    madeIn: 'France',
    sex: 'Woman'
  }
];


function CatalogPage() {
  return (
    <div className="catalogPageContainer">
      <HeaderFilter />

      <div className={styles.catalogGrid}>
        
        {catalogProductsData.map((product) => (
          <CatalogItemCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            brand={product.brand}
            madeIn={product.madeIn}
            sex={product.sex}
            type={product.type}
            volume={product.volume}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;