import { createContext, useState, useEffect, useContext } from 'react';
import * as api from 'utils/api';

const CatalogContext = createContext([]);

export const CatalogProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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

  return (
    <CatalogContext.Provider value={products} >
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = () => useContext(CatalogContext);
