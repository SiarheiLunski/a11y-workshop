import { useState, useEffect } from 'react';
import * as api from 'utils/api';
import { Carousel } from 'components/carousel/Carousel';
import { NewsItem } from 'components/layout/NewsItem';

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.getNews();
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const secondaryNewsItems = news.slice(3);
  return (
    <ul>
      <Carousel items={news.slice(0, 3)}/>
      {secondaryNewsItems.map((newsItem, idx) => 
        <NewsItem item={newsItem} isFirst={idx === 0} isLast={idx === secondaryNewsItems.length - 1} />
      )}
    </ul>
  );
};
