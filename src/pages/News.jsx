import { useState, useEffect } from 'react';
import axios from 'axios';

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios('http://localhost:8000/news');
        const { results } = data?.response;
        setNews(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <ul>
    {news.map(newsItem => 
      <li key={newsItem.id}>{newsItem.webTitle}</li>
    )}
  </ul>;
};
