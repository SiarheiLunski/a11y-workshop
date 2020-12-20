import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './HeaderCartProductsList.css';

export const HeaderCartProductsList = ({ cartProducts, addToCart, removeFromCart }) => {
  if (cartProducts.length === 0) return (
    <div className="header-cart-products-list">
    No items
    </div>
  );

  const updateCartItem = ({ id, amount }) => e => {
    if (e.target.value > amount) {
      addToCart(id);
    } else {
      removeFromCart(id);
    }
  };

  const totalPrice = cartProducts.reduce((total, { price, amount }) => total + price * amount, 0);

  return (
    <div className="header-cart-products-list">
      {cartProducts.length === 0 && 'No items'}
      {cartProducts.map(selectedProduct => (
        <div className="header-cart-product">
          <div>
            <img className="header-cart-product__thumbnail" src={selectedProduct.thumbnail} alt=""/>
            <input type="number" value={selectedProduct.amount} onChange={updateCartItem(selectedProduct)} />
          </div>
          <div className="header-cart-product__info">
            <div>{selectedProduct.title}</div>
          </div>
          <div className="header-cart-product__close-icon">
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        </div>
      )
      )}
      <div className="header-cart-products-list__summary">
        <span>Total price</span>
        <span>${totalPrice}</span>
        <button>Buy</button>
      </div>
    </div>
  );
};
