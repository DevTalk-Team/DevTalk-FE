import React from 'react';
import LoginForm from './LoginForm';
import styles from './Login.module.css';
import Header from '../Header/Header';
import FindIdPwBtn from './FindIdPwBtn';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const navigate = useNavigate();

  function gojoin() {
    navigate('/mainscreen1');
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="회원가입" />
      </div>
      <div>
        <button>멘티 회원가입</button>
      </div>
    </div>
  );
}
