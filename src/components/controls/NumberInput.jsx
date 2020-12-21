import './NumberInput.css';

export const NumberInput = ({ value, onChange }) => {
  return (
    <input 
      type="number"
      className="number-input"
      value={value}
      onChange={onChange}
    />
  );
};
