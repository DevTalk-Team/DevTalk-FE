import React, { useState, useEffect } from 'react';
import styles from '../Main.module.css';

export default function Main1FormList({
  itemlist,
  handleClick,
  elementIndex,
  isSelect,
}) {
  const { id, how } = itemlist;
  //   const [check, setCheck] = useState(false);
  //   useEffect(() => {
  //     if (check === true) {
  //       onUpdate({ id, how });
  //     } else {
  //       onDelete(itemlist);
  //     }
  //   }, [check]);

  //   const handleChange = (e) => {
  //     setCheck(() => !check);
  //   };

  return (
    <button
      onClick={() => handleClick(elementIndex, id)}
      className={isSelect ? `${styles.btn1}` : `${styles.disbtn1}`}
    >
      {how}
    </button>
  );
}
