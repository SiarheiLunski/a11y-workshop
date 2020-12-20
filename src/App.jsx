import { createContext, useState } from 'react';
import { Router } from './Router';
import './App.css';

export const CatalogContext = createContext([]);

export const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addToCart = product => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeFromCart = product => {
    setSelectedProducts(selectedProducts.filter(selectedProductsItem => selectedProductsItem.id !== product.id));
  };

  return (
    <CatalogContext.Provider value={{ selectedProducts, addToCart, removeFromCart }}>
      <Router />
    </CatalogContext.Provider>
  );
};

