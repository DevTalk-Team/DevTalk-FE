import React from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';

export default function Main2() {
  //상담분야
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="상담 분야를" where="main3" />
      </div>
    </div>
  );
}
