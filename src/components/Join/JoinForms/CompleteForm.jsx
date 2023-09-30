import React from 'react';
import styles from './CompleteForm.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CompleteForm() {
  const location = useLocation();
  const name = location.state.name;

  const navigate = useNavigate();
  function gologin() {
    navigate('/loginscreen');
  }
  function gohome() {
    navigate('/homescreen');
  }
  return (
    <div className={styles.container}>
      <p className={styles.welcome}>
        {name} 님, <br /> 회원가입이 완료되었습니다.
      </p>
      <div className={styles.btns}>
        <button onClick={gologin} className={styles.btn1}>
          로그인
        </button>
        <button onClick={gohome} className={styles.btn2}>
          홈
        </button>
      </div>
    </div>
  );
}
