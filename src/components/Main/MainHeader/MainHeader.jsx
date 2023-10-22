import React from 'react';
import styles from './MainHeader.module.css';
import { useNavigate } from 'react-router-dom';

export default function MainHeader({ topic, where, check, id }) {
  const navigate = useNavigate();
  //recoil 활용
  const gonext = () => {
    navigate(`/${where}`, { state: { id: id, value: id } });
  };
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.title}>
          <p className={styles.p1}>{topic}</p>
          <p className={styles.p2}>선택해 주세요</p>
        </div>
        <div className={styles.btndiv}>
          <button
            className={check ? `${styles.btn}` : `${styles.disbtn}`}
            disabled={check === false}
            onClick={gonext}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
