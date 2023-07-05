import React from 'react';
import LoginForm from './LoginForm';
import styles from './Login.module.css';
import Header from '../Header/Header';

export default function Login() {
  return (
    <div className={styles.container}>
      <Header title="로그인" />
      <div className={styles.form}>
        <h1 className={styles.h1}>Devtalk</h1>
        <LoginForm />
      </div>
    </div>
  );
}
