import { Navigation } from './Navigation';

export const Layout = ({ children }) => {
  return <div>
    <Navigation />
    {children}
  </div>;
};
