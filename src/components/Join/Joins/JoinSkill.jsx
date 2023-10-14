import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Joins.module.css';
import Header from '../../Header/Header';
import SkillForm from '../JoinForms/Skills/SkillForm';

export default function JoinPhone() {
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.value;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={title} />
      </div>
      <div className={styles.form}>
        <SkillForm id={id} title={title} />
      </div>
    </div>
  );
}
