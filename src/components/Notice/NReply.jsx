import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import styles from './Notice.module.css';

export default function NReply() {
  return (
    <div className={styles.container}>
      <div className={styles.notice}>
        <p className={styles.icon}>
          <FaRegPaperPlane size={25} color="#148CFF" />
        </p>
        <p className={styles.word}>게시글 답변이 등록되었습니다.</p>
        <p className={styles.time}>2주일전</p>
      </div>
    </div>
  );
}
