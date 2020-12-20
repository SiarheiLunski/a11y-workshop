import cc from 'classcat';
import './NewsItem.css';

export const NewsItem = ({ item, isFirst, isLast }) => {
  return (
    <div className={cc(['news-item', isLast && 'news-item--last'])}>
      <img src={item.thumbnail} />
      <span className="news-item__title">
        {item.title}
        <a href={item.url}>Read full article</a>
      </span>
    </div>
  );
};
