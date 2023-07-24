import React from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';

export default function Main1() {
  //진행방식
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="원하는 진행방식을" where="main2" />
      </div>
    </div>
  );
}
