import { useEffect, useState, useContext } from 'react';
import { CatalogFilter } from 'components/forms/CatalogFilter';
import { SidebarLayout } from 'components/layout/SidebarLayout';
import { CatalogItem } from 'components/layout/CatalogItem';
import { CatalogContext } from 'App';
import * as api from 'utils/api';

const PAGE_ITEMS = 6;

export const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { selectedProducts, addToCart, removeFromCart } = useContext(CatalogContext);

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
    <div>
      Catalog
      <SidebarLayout>
        <CatalogFilter />
        {products.map(product => (
          <CatalogItem
            item={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            selected={selectedProducts.some(selectedProductsItem => selectedProductsItem.id === product.id)}
          />
        ))}
      </SidebarLayout>
    </div>
  );
};
