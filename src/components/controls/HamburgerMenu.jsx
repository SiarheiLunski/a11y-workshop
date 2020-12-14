import { useEffect, useState } from 'react';
import './HamburgerMenu.css';

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [containerClassName, setContainerClassName] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setContainerClassName(open ? 'container container--open' : 'container');
  }, [open]);

  return <div className={containerClassName} onClick={toggle} >
    <div className="bar bar-1" />
    <div className="bar bar-2" />
    <div className="bar bar-3" />
  </div>;
};
