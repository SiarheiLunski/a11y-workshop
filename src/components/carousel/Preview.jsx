import './Preview.css';

export const Preview = ({ item }) => {
  return <div className="carousel-preview">
    <h3>{item.title}</h3>
    <span className="carousel-preview__date">Date of publication: {(new Date(item.publicationDate)).toDateString()}</span>
    <div className="carousel-preview__body">{item.bodyText}</div>
    <div className="carousel-preview__full-container">
      <button className="carousel-preview__full">Read</button>
    </div>
  </div>;
};
