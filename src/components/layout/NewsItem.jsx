import './NewsItem.css';

export const NewsItem = ({ item, isFirst, isLast }) => {
  const className = isLast ? 'news-item news-item--last' : 'news-item';
  return <div className={className}>
    <img src={item.thumbnail} />
    <span className="news-item__title">
      {item.title}
      <a href={item.url}>Read full article</a>
    </span>
  </div>;
};
