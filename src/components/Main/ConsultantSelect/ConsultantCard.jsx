import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './MainMentor.module.css';
import { useNavigate } from 'react-router-dom';

export default function ConsultantCard({
  mentor,
  handleClick,
  elementIndex,
  isSelect,
}) {
  const { id, img, name, info, skill, price, rank } = mentor;

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
              alt="mentor"
            />
          </div>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.mentorinfo}>
          <p className={styles.p}>{info}</p>
          <p className={styles.p}>{skill}</p>
          <p className={styles.price}>{price}</p>
          <div className={styles.mentorrank}>
            <FaStar color="#FFA500" />
            <p className={styles.prank}>{rank}</p>
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
