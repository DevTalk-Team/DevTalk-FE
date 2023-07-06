import React from 'react';
import LoginForm from './LoginForm';
import styles from './Login.module.css';
import Header from '../Header/Header';
import FindIdPwBtn from './FindIdPwBtn';
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  return (
    <div className={styles.container}>
      <Header title="로그인" />
      <div className={styles.form}>
        <h1 className={styles.h1}>Devtalk</h1>
        <LoginForm />
        <FindIdPwBtn />
      </div>
      <div className={styles.line}>
        <span className={styles.linetext}>회원가입 하러가기</span>
      </div>
      <div className={styles.socialbtn}>
        <GoogleLogin />
      </div>
    </div>
  );
}
