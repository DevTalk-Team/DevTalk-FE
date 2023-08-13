import React from 'react';
import styles from './Main7.module.css';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Main7() {
  //상담비용안내
  const navigate = useNavigate();

  const goend = () => {
    navigate('/main8');
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.btnarea} onClick={goend}>
        <button className={styles.btn}>상담 요청 보내기</button>
      </div>
      <div className={styles.block}>
        <p className={styles.topic}>상담 예약 정보</p>
        <div className={styles.moneyarea}>
          <p className={styles.money}>상담 비용</p>
          <p className={styles.money}>10000원</p>
        </div>
        <div className={styles.txtblock}>
          <div className={styles.txtarea}>
            <p className={styles.txt}>상담 일시</p>
            <p className={styles.txt2}>2023년 8월 8일 14시 30분</p>
          </div>
          <div className={styles.txtarea}>
            <p className={styles.txt}>상담 유형</p>
            <p className={styles.txt2}>비대면 상담</p>
          </div>
          <div className={styles.txtarea}>
            <p className={styles.txt}>상담 전문가</p>
            <p className={styles.txt2}>박용준 프론트엔드</p>
          </div>
        </div>
      </div>
    </div>
  );
}
