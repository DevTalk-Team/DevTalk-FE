import React from 'react';
import styles from '../Main.module.css';

export default function TimeFormList({
  timelist,
  handleClick,
  elementIndex,
  isSelect,
}) {
  const { time } = timelist;

  return (
    <button
      onClick={() => handleClick(elementIndex)}
      className={isSelect ? `${styles.btn1}` : `${styles.disbtn1}`}
    >
      {time}
    </button>
  );
}
