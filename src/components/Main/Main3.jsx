import React, { useState } from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';

export default function Main3() {
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '웹',
    },
    {
      id: 1,
      how: '서버',
    },
    {
      id: 2,
      how: '디자인',
    },
    {
      id: 3,
      how: '데브옵스',
    },
    {
      id: 4,
      how: '빅데이터',
    },
    {
      id: 5,
      how: '클라우드',
    },
    {
      id: 6,
      how: '핀테크',
    },
    {
      id: 7,
      how: '보안',
    },
    {
      id: 8,
      how: '모바일앱',
    },
    {
      id: 9,
      how: '게임',
    },
    {
      id: 10,
      how: '임베디드',
    },
    {
      id: 11,
      how: 'DB',
    },
  ]);
  //기술분야
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="기술 분야를" where="main4" />
      </div>
      <div className={styles.choose3}>
        {hows.map((item) => (
          <button className={styles.btn3} key={item.id}>
            {item.how}
          </button>
        ))}
      </div>
    </div>
  );
}
