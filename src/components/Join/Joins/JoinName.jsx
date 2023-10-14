import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Joins.module.css';
import Header from '../../Header/Header';
import NameForm from '../JoinForms/NameForm';

export default function JoinName() {
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.value;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={title} />
      </div>
      <div className={styles.form}>
        <NameForm id={id} title={title} />
      </div>
    </div>
  );
}
