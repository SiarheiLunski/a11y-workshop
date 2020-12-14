import './HamburgerMenu.css';
import { useToggle } from '../../hooks/useToggle';

export const HamburgerMenu = ({ open, toggle }) => {
  const containerClassName = useToggle('hamburger', open);

  return <div className={containerClassName} onClick={toggle} >
    <div className="hamburger-bar hamburger-bar-1" />
    <div className="hamburger-bar hamburger-bar-2" />
    <div className="hamburger-bar hamburger-bar-3" />
  </div>;
};
