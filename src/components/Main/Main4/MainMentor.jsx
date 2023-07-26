import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './MainMentor.module.css';

export default function MainMentor({ mentor }) {
  const { id, img, name, info, skill, price, rank } = mentor;
  //전문가 카드
  return (
    <div className={styles.container}>
      <div>
        <div>
          <div className={styles.img}>이미지</div>
          <p className={styles.p}>{name}</p>
        </div>
        <div>
          <p className={styles.p}>{info}</p>
          <p className={styles.p}>{skill}</p>
          <p className={styles.p}>{price}</p>
          <div>
            <FaStar />
            <p>{rank}</p>
          </div>
        </div>
      </div>
      <button> 자세히 보기</button>
      <button>선택</button>
    </div>
  );
}
