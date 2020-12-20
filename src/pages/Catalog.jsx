import { useState, useContext } from 'react';
import { CatalogFilter } from 'components/forms/CatalogFilter';
import { SidebarLayout } from 'components/layout/SidebarLayout';
import { CatalogItem } from 'components/layout/CatalogItem';
import { CatalogContext } from 'App';

const PAGE_ITEMS = 6;

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { products, selectedProducts, addToCart, removeFromCart } = useContext(CatalogContext);

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
