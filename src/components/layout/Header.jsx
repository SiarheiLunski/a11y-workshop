import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { Navigation } from '../controls/Navigation';
import { HamburgerMenu } from '../controls/HamburgerMenu';
import { HeaderCartControl } from '../controls/HeaderCartControl';
import './Header.css';

export const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
        {location.pathname.includes('catalog') && <HeaderCartControl />}
      </div>
    </div>
  );
};
