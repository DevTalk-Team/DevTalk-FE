import React, { useState } from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';

export default function Main1() {
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '15분 전화상담',
    },
    {
      id: 1,
      how: '30분 영상상담',
    },
    {
      id: 2,
      how: '1시간 대면상담',
    },
    {
      id: 3,
      how: '게시판상담',
    },
  ]);
  //진행방식
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="원하는 진행방식을" where="main2" />
      </div>
      <div className={styles.choose1}>
        {hows.map((item) => (
          <button className={styles.btn1}>{item.how}</button>
        ))}
      </div>
    </div>
  );
}
