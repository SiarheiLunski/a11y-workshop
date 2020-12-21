import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'state/Cart';
import { useCatalog } from 'state/Catalog';
import { HeaderCartProductsList } from './HeaderCartProductsList';
import './HeaderCartControl.css';

export const HeaderCartControl = () => {
  const catalogProducts = useCatalog();
  const { selectedProducts, addToCart, decreaseAmount, removeFromCart } = useCart();
  const amountOfItems = selectedProducts.reduce((sum, { amount }) => sum + amount, 0);

  return (
    <div className="header-cart-control">
      <span>{amountOfItems}</span>
      <FontAwesomeIcon icon={faCartPlus} />
      <HeaderCartProductsList
        cartProducts={selectedProducts.map(selectedProduct => ({ 
          ...catalogProducts.find(({ id }) => id === selectedProduct.id),
          ...selectedProduct,
        }))}
        addToCart={addToCart}
        decreaseAmount={decreaseAmount}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};
