import React from 'react';
import styles from '../Main.module.css';

export default function ProceedTypeFormList({
  itemlist,
  handleClick,
  elementIndex,
  isSelect,
}) {
  const { id, how } = itemlist;

  return (
    <button
      onClick={() => handleClick(elementIndex, id)}
      className={isSelect ? `${styles.btn1}` : `${styles.disbtn1}`}
    >
      {how}
    </button>
  );
}
