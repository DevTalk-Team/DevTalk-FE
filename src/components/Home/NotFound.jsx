import React from 'react';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>이용에 불편을 드려 죄송합니다</h2>
      <button className={styles.btn}>홈</button>
    </div>
  );
}
