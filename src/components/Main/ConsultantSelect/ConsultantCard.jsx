import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './MainMentor.module.css';
import { useNavigate } from 'react-router-dom';

export default function ConsultantCard({
  consultant,
  handleClick,
  elementIndex,
  isSelect,
}) {
  const { name, year, cost } = consultant;

  const navigate = useNavigate();

  const gomentor = () => {
    navigate('/');
    // `mentor/${id}`
  };

  //전문가 카드
  return (
    <div className={styles.card}>
      <div
        className={
          isSelect ? `${styles.thiscarddisplay}` : `${styles.carddisplay}`
        }
      >
        <div className={styles.nameimg}>
          <div className={styles.img}>
            <img
              className={styles.mentorphoto}
              src={'./logo192.png'}
              alt="consultant"
            />
          </div>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.mentorinfo}>
          <p className={styles.p}> {year}년차 </p>
          <p className={styles.p}> 백엔드개발자</p>
          <p className={styles.price}>{cost}</p>
          <div className={styles.mentorrank}>
            <FaStar color="#FFA500" />
            <p className={styles.prank}>3.8</p>
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn1} onClick={gomentor}>
          상세 보기
        </button>
        <button
          onClick={() => handleClick(elementIndex)}
          className={styles.btn2}
        >
          선택
        </button>
      </div>
    </div>
  );
}
