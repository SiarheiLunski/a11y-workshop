import { useEffect, useState, useRef } from 'react';
import { Preview } from './Preview';
import './Carousel.css';

const Arrow = ({ direction, onClick }) => {
  const className = direction === 'right' 
    ? 'carousel-arrow carousel-arrow--right' 
    : 'carousel-arrow carousel-arrow--left';
  return <div className={className} onClick={onClick} />;
};

const Dot = ({ isActive, onClick }) => {
  return <div className={isActive ? 'carousel-dot carousel-dot--active' : 'carousel-dot'} onClick={onClick} />;
};

export const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselContentClassName, setCarouselContentClassName] = useState();
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => autoPlayRef.current();
    const interval = setInterval(play, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCarouselContentClassName(`carousel-content carousel-content--active-${activeIndex}`);
  }, [activeIndex]);

  const nextSlide = () => {
    if (activeIndex === items.length - 1) return setActiveIndex(0);
    setActiveIndex(activeIndex + 1);
  };

  const prevSlide = () => {
    if (activeIndex === 0) return setActiveIndex(items.length - 1);
    setActiveIndex(activeIndex - 1);
  };

  const selectDot = idx => setActiveIndex(idx);

  return <div className="carousel-container">
    <div className="carousel">
      <div className={carouselContentClassName}>
        {items.map(item => (
          <div className="carousel-content-item" key={item.id}>
            <img src={item.thumbnail} alt=""/>
          </div>
        ))}
      </div>
      <Arrow direction="left" onClick={prevSlide} />
      <Arrow direction="right" onClick={nextSlide} />
      <div className="carousel-dot-container">
        {items.map((item, idx) => <Dot 
          key={item.id} 
          isActive={activeIndex === idx} 
          onClick={() => selectDot(idx)}
        />)}
      </div>
    </div>
    {items[activeIndex] && <Preview item={items[activeIndex]} />}
  </div>;
};
