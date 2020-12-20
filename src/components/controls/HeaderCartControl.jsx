import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CatalogContext } from 'App';
import { HeaderCartProductsList } from './HeaderCartProductsList';
import './HeaderCartControl.css';

export const HeaderCartControl = () => {
  const { products, selectedProducts, addToCart, removeFromCart } = useContext(CatalogContext);

  return (
    <div className="header-cart-control">
      <span>{selectedProducts.length}</span>
      <FontAwesomeIcon icon={faCartPlus} />
      <HeaderCartProductsList
        cartProducts={selectedProducts.map(selectedProduct => ({ 
          ...products.find(({ id }) => id === selectedProduct.id),
          ...selectedProduct,
        }))}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};
