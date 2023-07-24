import React from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';

export default function Main5() {
  //예약 시간
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="예약 시간을" where="main6" />
      </div>
    </div>
  );
}
