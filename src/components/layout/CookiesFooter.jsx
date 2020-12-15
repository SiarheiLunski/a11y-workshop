import { useState } from 'react';
import './CookiesFooter.css';

export const CookiesFooter = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return <div className="cookies-footer">
    <button onClick={() => setAccepted(true)}>Accept</button>
    I accept cookies
  </div>;
};
