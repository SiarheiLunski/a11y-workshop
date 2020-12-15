import './TermsCheckbox.css';

export const TermsCheckbox = ({ children }) => {
  return <div className="terms-checkbox-container">
    <input type="checkbox"/>
    <div>{children}</div>
  </div>;
};
