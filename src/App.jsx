import { createContext, useState, useEffect } from 'react';
import { Router } from './Router';
import * as api from 'utils/api';
import './App.css';

export const CatalogContext = createContext([]);

export const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      setSelectedProducts(JSON.parse(localStorage.getItem('selectedProducts')) || []);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const addToCart = productId => {
    const alreadyInCart = selectedProducts.some(selected => selected.id === productId);
    const result = alreadyInCart 
      ? selectedProducts.map(selected => 
        selected.id === productId 
          ? { ...selected, amount: selected.amount + 1 }
          : selected
      ) 
      : [...selectedProducts, { id: productId, amount: 1 }];
    setSelectedProducts(result);
  };

  const removeFromCart = productId => {
    const product = selectedProducts.find(selected => selected.id === productId);
    if (!product) return;
    const result = selectedProducts.reduce((acc, selected) => {
      if (selected.id !== productId) return [...acc, selected];
      return selected.amount > 1 ? [...acc, { ...selected, amount: selected.amount - 1 }] : acc;
    }, []);
    setSelectedProducts(result);
  };

  return (
    <CatalogContext.Provider value={{ products, selectedProducts, addToCart, removeFromCart }}>
      <Router />
    </CatalogContext.Provider>
  );
};

