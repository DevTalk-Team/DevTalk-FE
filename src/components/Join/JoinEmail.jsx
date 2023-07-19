import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import EmailForm2 from '../Join/EmailForm2';
import styles from './JoinEmail.module.css';
import PwForm from './PwForm';

export default function JoinEmail() {
  const location = useLocation();
  const title = location.state.value;

  return (
    <div className={styles.container}>
      <div className={styles.header}>{/* <Header title={title} /> */}</div>
      <div className={styles.emailform}>
        <PwForm />
      </div>
    </div>
  );
}
