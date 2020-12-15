import { useState, useEffect } from 'react';
import * as api from 'utils/api';
import { Carousel } from 'components/carousel/Carousel';
import './News.css';

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

  return <ul>
    <Carousel items={news.slice(0, 3)}/>
    {news.slice(3).map(newsItem =>
      <li key={newsItem.id}>
        <h3>{newsItem.title}</h3>
        <img src={newsItem.thumbnail} alt=""/>
      </li>
    )}
  </ul>;
};
