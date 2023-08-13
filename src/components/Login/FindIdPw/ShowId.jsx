import React from 'react';
import styles from './ShowId.module.css';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function ShowId() {
  const id = 'devtallk0808@naver.com';
  const navigate = useNavigate();

  function gologin() {
    navigate('/loginscreen');
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="아이디 찾기" />
      </div>
      <div className={styles.showid}>
        <p className={styles.p}>회원님의 아이디는</p>
        <p className={styles.p}>{id} 입니다.</p>
      </div>
      <div className={styles.btndiv}>
        <button className={styles.btn} onClick={gologin}>
          로그인 바로 가기
        </button>
      </div>
    </div>
  );
}
