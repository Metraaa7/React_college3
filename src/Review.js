import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const prevCard = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextCard = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const randomCard = () => {
    setIndex(randomNumberInRange(0,3));
  }

  return (
    <article className='review'> 
      <div className='img-container'>
          <img src={ image } alt = { name } className='person-img'></img>
          <span className='quote-icon'>
          <FaQuoteRight/>
          </span>
      </div>
      <h4 className='author'>{ name }</h4>
      <p className='job'>{ job }</p>
      <p className='info'>{ text }</p>
      <div className='button-container'>
        <button onClick={prevCard} className='prev-btn'>
          <FaChevronLeft/>
        </button>
        <button onClick={nextCard} className='next-btn'> 
          <FaChevronRight/>
        </button>
      </div>
      <button onClick={randomCard} className='random-btn'>Surprice me</button>
    </article>
  );
};

export default Review;
