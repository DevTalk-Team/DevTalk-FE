import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './MainMentor.module.css';

export default function MainMentor({ mentor }) {
  const { id, img, name, info, skill, price, rank } = mentor;
  //전문가 카드
  return (
    <div className={styles.card}>
      <div className={styles.carddisplay}>
        <div className={styles.nameimg}>
          <div className={styles.img}>
            <img
              className={styles.mentorphoto}
              src={'./logo192.png'}
              alt="mentor"
            />
          </div>
          <p className={styles.p}>{name}</p>
        </div>
        <div className={styles.mentorinfo}>
          <p className={styles.p}>{info}</p>
          <p className={styles.p}>{skill}</p>
          <p className={styles.p}>{price}</p>
          <div className={styles.mentorrank}>
            <FaStar color="#FFA500" />
            <p className={styles.prank}>{rank}</p>
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn1}> 상세 보기</button>
        <button className={styles.btn2}>선택</button>
      </div>
    </div>
  );
}
