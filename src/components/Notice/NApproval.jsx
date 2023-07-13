import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import styles from './Notice.module.css';

export default function NApproval() {
  return (
    //상담요청승인
    <div className={styles.container}>
      <div className={styles.notice}>
        <p className={styles.icon}>
          <FaRegCheckCircle size={30} color="#52E252" />
        </p>
        <p className={styles.word}>30분 영상상담 예약 요청이 승인되었습니다.</p>
        <p className={styles.time}>1일전</p>
      </div>
    </div>
  );
}
