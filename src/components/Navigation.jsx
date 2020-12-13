import { Link } from 'react-router-dom';

export const Navigation = () => {
  return <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/contact-us">Contact Us</Link></li>
    <li><Link to="/news">News</Link></li>
    <li><Link to="/catalog">Catalog</Link></li>
    <li><Link to="/tickets">Tickets</Link></li>
  </ul>;
};
