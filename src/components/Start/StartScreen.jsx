import React from 'react';
import styles from './StartScreen.module.css';
import { useNavigate } from 'react-router-dom';

export default function StartScreen() {
  const Navigate = useNavigate();

  function gohome() {
    Navigate('/homescreen');
  }

  function godev() {
    Navigate('/homescreen');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Devtalk</h1>
      <div className={styles.btns}>
        <button className={styles.btn1} onClick={godev}>
          개발 상담 바로가기
        </button>
        <button className={styles.btn2} onClick={gohome}>
          홈으로 바로가기
        </button>
      </div>
    </div>
  );
}
