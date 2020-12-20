import { useState } from 'react';
import './CookiesFooter.css';

export const CookiesFooter = () => {
  const [accepted, setAccepted] = useState(false);

  return !accepted && (
    <div className="cookies-footer">
      <button onClick={() => setAccepted(true)}>Accept</button>
    I accept cookies
    </div>
  );
};
