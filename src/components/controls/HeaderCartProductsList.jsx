import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { NumberInput } from 'components/controls/NumberInput';
import { bindUpdateCartAmount } from 'utils/inputHandlers';
import './HeaderCartProductsList.css';

export const HeaderCartProductsList = ({ cartProducts, addToCart, decreaseAmount, removeFromCart }) => {
  if (cartProducts.length === 0) return (
    <div className="header-cart-products-list">
    No items
    </div>
  );

  const totalPrice = cartProducts.reduce((total, { price, amount }) => total + price * amount, 0);

  return (
    <div className="header-cart-products-list">
      <div className="header-cart-products-list__items">
        {cartProducts.length === 0 && 'No items'}
        {cartProducts.map(selectedProduct => (
          <div className="header-cart-product" key={selectedProduct.id}>
            <div>
              <img className="header-cart-product__thumbnail" src={selectedProduct.thumbnail} alt=""/>
              <NumberInput 
                value={selectedProduct.amount}
                onChange={bindUpdateCartAmount({
                  onIncrease: addToCart,
                  onDecrease: decreaseAmount,
                  ...selectedProduct
                })}
              />
            </div>
            <div className="header-cart-product__info">
              <div>{selectedProduct.title}</div>
            </div>
            <div className="header-cart-product__remove-icon" onClick={() => removeFromCart(selectedProduct.id)}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
        )
        )}
      </div>
      <div className="header-cart-products-list__summary">
        <div>
          <span className="header-cart-product__total-label">Total price</span>
          <span className="header-cart-product__total-value">${totalPrice}</span>
        </div>
        <button className="header-cart-product__submit-button">Buy</button>
      </div>
    </div>
  );
};
