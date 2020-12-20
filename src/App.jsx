import { createContext, useState, useEffect } from 'react';
import { Router } from './Router';
import * as api from 'utils/api';
import './App.css';

export const CatalogContext = createContext([]);

const ejectProductItem = (products, productId) => products.reduce(({ filtered, product }, currentProduct) => {
  if (currentProduct.id === productId) return { filtered, product: currentProduct };
  return { filtered: [...filtered, currentProduct], product };
}, { filtered: [] });

export const App = () => {
  const [products, setProducts] = useState([]);
  // TODO: Replace with Set
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
    const { 
      product = { id: productId, amount: 0 }, 
      filtered 
    } = ejectProductItem(selectedProducts, productId);
    product.amount += 1;
    setSelectedProducts([...filtered, product]);
  };

  const removeFromCart = productId => {
    const product = selectedProducts.find(({ id }) => id === productId);
    if (!product) return;
    const filteredProducts = selectedProducts.filter(selectedProductsItem => selectedProductsItem.id !== productId);
    if (product.amount > 1) {
      product.amount -= 1;
      setSelectedProducts([...filteredProducts, product]);
    } else {
      setSelectedProducts(filteredProducts);
    }
  };

  return (
    <CatalogContext.Provider value={{ products, selectedProducts, addToCart, removeFromCart }}>
      <Router />
    </CatalogContext.Provider>
  );
};

