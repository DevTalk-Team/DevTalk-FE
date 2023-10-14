import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import styles from './Notice.module.css';

export default function NRefuse() {
  return (
    //승인요청거절
    <div className={styles.container}>
      <div className={styles.notice}>
        <p className={styles.icon}>
          <FaRegTimesCircle size={30} color="#FF0000" />
        </p>
        <p className={styles.word}>15분 전화상담 예약 요청이 거절되었습니다.</p>
        <p className={styles.time}>5분전</p>
      </div>
    </div>
  );
}
