import { useState } from 'react';
import { CatalogFilter } from 'components/forms/CatalogFilter';
import { SidebarLayout } from 'components/layout/SidebarLayout';
import { CatalogItem } from 'components/layout/CatalogItem';
import { useCatalog } from 'state/Catalog';

const PAGE_ITEMS = 6;

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const catalogProducts = useCatalog();

  return (
    <div>
      <h1>Catalog</h1>
      <SidebarLayout>
        <CatalogFilter />
        {catalogProducts.map(product => (
          <CatalogItem key={product.id} item={product} />
        ))}
      </SidebarLayout>
    </div>
  );
};
