import { Header } from './Header';
import './MainLayout.css';

export const MainLayout = ({ children }) => {
  return <div>
    <Header />
    <div className="layout">
      {children}
    </div>
  </div>;
};
