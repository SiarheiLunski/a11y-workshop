import cc from 'classcat';
import { faCartPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'state/Cart';
import { NumberInput } from 'components/controls/NumberInput';
import { IconButton } from 'components/controls/IconButton';
import { bindUpdateCartAmount } from 'utils/inputHandlers';
import './CatalogItem.css';

export const CatalogItem = ({ item }) => {
  const { selectedProducts, addToCart, decreaseAmount, removeFromCart } = useCart();
  const cartItem = selectedProducts.find(selectedProductsItem => selectedProductsItem.id === item.id);
  const addAmount = () => addToCart(item.id);

  return (
    <div
      key={item.id}
      className={cc([
        'catalog-item-container', 
        item.onSale && 'catalog-item-container--on-sale', 
        cartItem && 'catalog-item-container--selected'
      ])}
    >
      <span className="catalog-item-container__title">
        {item.title}
      </span>
      <span className="catalog-item-container__price">Price: ${item.price}</span>
      <div className="catalog-item-container__thumbnail">
        <img src={item.thumbnail} />
      </div>
      <div className="catalog-item-controls">
        {cartItem 
          ? 
          <>
            <NumberInput
              value={cartItem.amount}
              onChange={bindUpdateCartAmount({
                onIncrease: addToCart,
                onDecrease: decreaseAmount,
                ...cartItem
              })}
            />
            <IconButton 
              icon={faTrashAlt} 
              onClick={() => removeFromCart(item.id)} 
              type="danger"
            />
          </> 
          : <IconButton 
            icon={faCartPlus}
            onClick={addAmount}
          />
        }
      </div>
    </div>
  );
};
