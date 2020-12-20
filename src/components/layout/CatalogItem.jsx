import cc from 'classcat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './CatalogItem.css';

export const CatalogItem = ({ item, addToCart, removeFromCart, selected }) => {
  return (
    <div key={item.id} className={cc(['catalog-item-container', item.onSale && 'catalog-item-container--on-sale'])}>
      <span className="catalog-item-container__title">
        {item.title}
      </span>
      <span className="catalog-item-container__price">Price: ${item.price}</span>
      <div className="catalog-item-container__thumbnail">
        <img src={item.thumbnail} />
      </div>
      {
        selected ?
          <span className="catalog-item-container__cart--selected" onClick={() => removeFromCart(item.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
          : <span className="catalog-item-container__cart" onClick={() => addToCart(item.id)}>
            <FontAwesomeIcon icon={faCartPlus} />
          </span>
      }
    </div>
  );
};
