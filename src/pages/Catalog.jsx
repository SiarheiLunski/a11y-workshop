import { useEffect, useState } from 'react';
import { CatalogFilter } from 'components/forms/CatalogFilter';
import { SidebarLayout } from 'components/layout/SidebarLayout';
import { CatalogItem } from 'components/layout/CatalogItem';
import * as api from 'utils/api';

const PAGE_ITEMS = 6;

export const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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

  return <div>
    Catalog
    <SidebarLayout>
      <CatalogFilter />
      {products.map(product => <CatalogItem item={product} />)}
    </SidebarLayout>
  </div>;
};
