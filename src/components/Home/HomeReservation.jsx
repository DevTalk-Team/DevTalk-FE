import React from 'react';
import styles from './HomeReservation.module.css';

export default function HomeReservation() {
  return (
    <div className={styles.container}>
      <div className={styles.reservation}>
        <img
          className={styles.mentorphoto}
          src={'./logo192.png'}
          alt="mentor"
        />
        <div>
          <p className={styles.p}>
            <strong>김유경</strong> 님
          </p>
          <p className={styles.p}>2023/07/07</p>
          <p className={styles.p}>16:42</p>
        </div>
        <button className={styles.btn}>예약확인</button>
      </div>
    </div>
  );
}
