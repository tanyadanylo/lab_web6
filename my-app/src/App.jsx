import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'; 
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/catalog" element={ <CatalogPage /> } />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;