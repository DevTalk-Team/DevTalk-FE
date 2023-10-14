import React, { useState, useEffect } from 'react';
import styles from '../Main.module.css';

export default function TimeFormList({
  timelist,
  handleClick,
  elementIndex,
  isSelect,
}) {
  const { id, time } = timelist;

  return (
    <button
      onClick={() => handleClick(elementIndex)}
      className={isSelect ? `${styles.btn1}` : `${styles.disbtn1}`}
    >
      {time}
    </button>
  );
}
