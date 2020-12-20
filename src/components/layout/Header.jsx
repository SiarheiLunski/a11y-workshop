import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CatalogContext } from 'App';
import { Navigation } from '../controls/Navigation';
import { HamburgerMenu } from '../controls/HamburgerMenu';
import './Header.css';

export const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { selectedProducts } = useContext(CatalogContext);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <HamburgerMenu open={open} toggle={toggle} />
      <Navigation open={open} />
      <div className="header__controls">
        {location.pathname.includes('catalog') && <div className="header__cart">
          <span>{selectedProducts.length}</span>
          <FontAwesomeIcon icon={faCartPlus} />
        </div>}
      </div>
    </div>
  );
};
