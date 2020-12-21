import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext([]);

export const CartProvider = ({ children, initialCart = [] }) => {
  const [selectedProducts, setSelectedProducts] = useState(initialCart);

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
    <CartContext.Provider
      value={{
        selectedProducts,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
