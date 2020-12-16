import './SidebarLayout.css';

export const SidebarLayout = ({ children }) => {
  return <div className="sidebar-layout">
    <div className="sidebar-layout__sidebar">
      {children[0]}
    </div>
    <div className="sidebar-layout__content">
      {children[1]}
    </div>
  </div>;
};
