import React from 'react';
import styles from './FindIdPwBtn.module.css';
import { useNavigate } from 'react-router-dom';

export default function FindIdPwBtn() {
  const Navigate = useNavigate();

  function findId() {
    Navigate('/homescreen');
  }
  function findPw() {
    Navigate('/homescreen');
  }
  return (
    <div className={styles.findbtn}>
      <button onClick={findId} className={styles.btn}>
        아이디 찾기
      </button>
      <h4 className={styles.bar}>|</h4>
      <button onClick={findPw} className={styles.btn}>
        비밀번호 찾기
      </button>
    </div>
  );
}
