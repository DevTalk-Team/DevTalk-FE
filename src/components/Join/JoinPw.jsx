import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './JoinEmail.module.css';
import PwForm from './PwForm';

export default function JoinPw() {
  const location = useLocation();
  const title = location.state.value;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={title} />
      </div>
      <div className={styles.emailform}>
        <PwForm />
      </div>
    </div>
  );
}
