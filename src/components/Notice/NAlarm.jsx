import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import styles from './Notice.module.css';

export default function NAlarm() {
  return (
    <div className={styles.container}>
      <div className={styles.notice}>
        <p className={styles.icon}>
          <FaRegBell size={30} color="#FFA500" />
        </p>
        <p className={styles.word}>10분 후에 상담이 시작됩니다.</p>
        <p className={styles.time}>3일전</p>
      </div>
    </div>
  );
}
