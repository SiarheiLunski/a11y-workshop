import './Preview.css';

export const Preview = ({ item }) => {
  return <div className="carousel-preview">
    <h3>{item.title}</h3>
  </div>;
};
