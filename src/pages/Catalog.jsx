import { useState } from 'react';
import { CatalogFilter } from 'components/forms/CatalogFilter';
import { SidebarLayout } from 'components/layout/SidebarLayout';
import { CatalogItem } from 'components/layout/CatalogItem';
import { useCart } from 'state/Cart';
import { useCatalog } from 'state/Catalog';

const PAGE_ITEMS = 6;

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const catalogProducts = useCatalog();
  const { selectedProducts, addToCart, removeFromCart } = useCart();

  return (
    <div>
      Catalog
      <SidebarLayout>
        <CatalogFilter />
        {catalogProducts.map(product => (
          <CatalogItem
            key={product.id}
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
