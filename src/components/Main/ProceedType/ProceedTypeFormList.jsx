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
      className={isSelect ? `${styles.btnproceed}` : `${styles.disbtnproceed}`}
    >
      {how}
    </button>
  );
}
