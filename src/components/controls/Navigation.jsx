import { Link } from 'react-router-dom';
import { useToggle } from '../../hooks/useToggle';
import './Navigation.css';

export const Navigation = ({ open }) => {
  const containerClassName = useToggle('navigation-container', open);

  return (
    <ul className={containerClassName}>
      <li><Link className="navigation-link" to="/">Home</Link></li>
      <li><Link className="navigation-link" to="/contact-us">Contact Us</Link></li>
      <li><Link className="navigation-link" to="/news">News</Link></li>
      <li><Link className="navigation-link" to="/catalog">Catalog</Link></li>
      <li><Link className="navigation-link" to="/tickets">Tickets</Link></li>
    </ul>
  );
};
