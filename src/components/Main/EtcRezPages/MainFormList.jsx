import React from 'react';
import styles from '../Main.module.css';

export default function MainFormList({
  itemlist,
  handleClick,
  elementIndex,
  isSelect,
}) {
  const { how } = itemlist;

  return (
    <button
      onClick={() => handleClick(elementIndex)}
      className={isSelect ? `${styles.btn1}` : `${styles.disbtn1}`}
    >
      {how}
    </button>
  );
}
