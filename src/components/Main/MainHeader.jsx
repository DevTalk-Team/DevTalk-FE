import React from 'react';
import styles from './MainHeader.module.css';
import { useNavigate } from 'react-router-dom';

export default function MainHeader({ topic, where }) {
  const navigate = useNavigate();
  const gonext = () => {
    navigate(`/${where}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.p1}>{topic}</p>
        <p className={styles.p2}>선택해 주세요</p>
      </div>
      <div className={styles.btndiv}>
        <button className={styles.btn} onClick={gonext}>
          다음
        </button>
      </div>
    </div>
  );
}
