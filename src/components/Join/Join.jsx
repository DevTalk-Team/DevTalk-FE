import React from 'react';
import styles from './Join.module.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const navigate = useNavigate();

  function gojoinmenti() {
    navigate('/joinname', { state: { id: 0, value: '멘티 회원가입' } });
  }
  function gojoinmento() {
    navigate('/joinname', { state: { id: 1, value: '전문가 회원가입' } });
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="회원가입" />
      </div>
      <div className={styles.btns}>
        <button onClick={gojoinmenti} className={styles.btn1}>
          멘티 회원가입
        </button>
        <button onClick={gojoinmento} className={styles.btn2}>
          전문가 회원가입
        </button>
      </div>
    </div>
  );
}
