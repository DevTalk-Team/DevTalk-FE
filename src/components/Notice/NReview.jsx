import React from 'react';
import { FaRegGrinWink } from 'react-icons/fa';
import styles from './Notice.module.css';

export default function NReview() {
  return (
    //상담후기 작성 요청
    <div className={styles.container}>
      <div className={styles.notice}>
        <p className={styles.icon}>
          <FaRegGrinWink size={30} />
        </p>
        <p className={styles.word}>상담 후기를 남겨주세요!</p>
        <p className={styles.time}>1주일전</p>
      </div>
    </div>
  );
}
