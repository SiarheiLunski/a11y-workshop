import { Header } from './Header';
import { CookiesFooter } from './CookiesFooter';
import './MainLayout.css';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <CookiesFooter />
      <div className="layout">
        {children}
      </div>
    </div>
  );
};
