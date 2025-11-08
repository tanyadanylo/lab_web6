import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

function HomePage() {
  return (
    <div className="homePage">
      <Hero/>
      <ProductList />
    </div>
  );
}

export default HomePage;