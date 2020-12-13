const news = [
  'Lorem',
  'Ipsum',
  'Doloret'
];

export const News = () => {
  return <ul>
    {news.map(newsItem => 
      <li>{newsItem}</li>
    )}
  </ul>;
};
