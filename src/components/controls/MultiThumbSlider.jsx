import { useState } from 'react';
import './MultiThumbSlider.css';

// Check https://css-tricks.com/multi-thumb-sliders-particular-two-thumb-case/ for implementation details
export const MultiThumbSlider = ({ min, max }) => {
  const [valueA, setValueA] = useState(100);
  const [valueB, setValueB] = useState(1200);

  return (
    <div
      className="multi-thumb-slider-container"
      style={{ 
        '--a': valueA, 
        '--b': valueB, 
        '--min': min, 
        '--max': max 
      }}
    >
      <input
        id="a" 
        type="range"
        min={min}
        max={max}
        value={valueA}
        onChange={e => setValueA(Number(e.target.value))}
      />
      <output for="a" style={{ '--c': valueA }} />
      <input
        id="b" 
        type="range"
        min={min}
        max={max}
        value={valueB}
        onChange={e => setValueB(Number(e.target.value))}
      />
      <output for="b" style={{ '--c': valueB }} />
    </div>
  ); 
};
