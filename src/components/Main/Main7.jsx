import React from 'react';
import styles from './Main.module.css';
import Header from '../Header/Header';

export default function Main7() {
  //상담비용안내
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
    </div>
  );
}
