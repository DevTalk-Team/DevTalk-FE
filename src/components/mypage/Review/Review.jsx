import React, { useEffect, useState } from 'react';
import ReviewSecond from './ReviewSecond';
import ReviewFirst from './ReviewFirst';
const Review = () => {
  const [score, setScore] = useState([false, false, false, false, false]);
  const [starActive, setStarActive] = useState(false);
  const ARRAY = [0, 1, 2, 3, 4];

  const onUpdateScore = (index) => {
    let star = [...score];
    for (let i = 0; i < 5; i++) {
      star[i] = i <= index ? true : false;
    }
    setScore(star);
    setStarActive(true);
  };

  return starActive ? (
    <ReviewSecond score={score} onUpdateScore={onUpdateScore} ARRAY={ARRAY} />
  ) : (
    <ReviewFirst score={score} onUpdateScore={onUpdateScore} ARRAY={ARRAY} />
  );
};

export default Review;
