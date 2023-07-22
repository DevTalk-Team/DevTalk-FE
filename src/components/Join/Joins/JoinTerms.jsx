import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Joins.module.css';
import Header from '../../Header/Header';
import TermsForm from '../JoinForms/TermsForm';

export default function JoinTerms() {
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.value;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="전문가 이용약관" />
      </div>
      <div className={styles.form}>
        <TermsForm id={id} title={title} />
      </div>
    </div>
  );
}
