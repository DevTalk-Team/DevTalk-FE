import React, { useState } from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';

export default function Main2() {
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '커리어',
    },
    {
      id: 1,
      how: '개발 장애',
    },
    {
      id: 2,
      how: '멘토 섭외',
    },
    {
      id: 3,
      how: '개발 외주',
    },
    {
      id: 4,
      how: '개발 컨설팅',
    },
    {
      id: 5,
      how: '개발 팀 구성',
    },
  ]);
  //상담분야
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="상담 분야를" where="main3" />
      </div>
      <div className={styles.choose2}>
        {hows.map((item) => (
          <button className={styles.btn2}>{item.how}</button>
        ))}
      </div>
    </div>
  );
}
