import cc from 'classcat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconButton.css';

export const IconButton = ({ icon, onClick, type = 'info' }) => {
  return (
    <span 
      className={cc(['catalog-item-button', `catalog-item-button--${type}`])}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};
