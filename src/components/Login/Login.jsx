import React from 'react';
import LoginForm from './LoginForm';
import styles from './Login.module.css';
import Header from '../Header/Header';
import FindIdPwBtn from './FindIdPwBtn';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function gojoin() {
    navigate('/joinscreen');
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="로그인" />
      </div>
      <div className={styles.form}>
        <h1 className={styles.h1}>Devtalk</h1>
        <LoginForm />
        <FindIdPwBtn />
      </div>
      <div className={styles.line}>
        <span className={styles.linetext}>회원가입 하러가기</span>
      </div>
      {/* <div className={styles.socialbtnarea}>소셜로그인</div> */}
      <div className={styles.joinbtnarea}>
        <button className={styles.joinbtn} onClick={gojoin}>
          회원 가입
        </button>
      </div>
    </div>
  );
}
