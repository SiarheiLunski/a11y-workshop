import './CatalogItem.css';

export const CatalogItem = ({ item }) => {
  return <div key={item.id} className="catalog-item-container">
    <span className="catalog-item-container__title">
      {item.title}
    </span>
    <img src={item.thumbnail} />
    <button>Add</button>
  </div>;
};
