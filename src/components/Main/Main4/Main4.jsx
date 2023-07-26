import React, { useState } from 'react';
import styles from '../Main.module.css';
import MainHeader from '../MainHeader';
import Header from '../../Header/Header';
import MainMentor from './MainMentor';

export default function Main4() {
  const [mentors, setMentors] = useState([
    {
      id: 0,
      img: './',
      name: '데브톡',
      info: '7년차 백엔드개발자 ',

      skill: 'Java,Spring',
      price: '15000원',
      rank: '4.7',
    },
    {
      id: 1,
      img: './',
      name: '데브톡',
      info: '7년차 백엔드개발자 ',
      skill: 'Java,Spring',
      price: '15000원',
      rank: '4.7',
    },
    {
      id: 2,
      img: './',
      name: '데브톡',
      info: '7년차 백엔드개발자 ',
      skill: 'Java,Spring',
      price: '15000원',
      rank: '4.7',
    },
  ]);
  //전문가 선택
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="원하는 전문가를" where="main5" />
      </div>
      <div className={styles.choose1}>
        {mentors.map((item) => (
          <MainMentor key={item.id} mentor={item} />
        ))}
      </div>
    </div>
  );
}
