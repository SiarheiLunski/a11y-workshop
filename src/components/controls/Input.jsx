import './Input.css';

export const Input = ({ type = 'input', label }) => {
  return <div className="input-container">
    {label && <span className="input-label">{label}</span>}
    <input type={type} className="input" />
  </div>;
};
