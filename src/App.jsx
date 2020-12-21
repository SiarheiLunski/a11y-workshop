import { CatalogProvider } from 'state/Catalog';
import { CartProvider } from 'state/Cart';
import { Router } from './Router';
import './App.css';

export const App = () => {
  return (
    <CatalogProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </CatalogProvider>
  );
};

