import React from 'react';
import styles from './Notice.module.css';
import NRefuse from './NRefuse';
import NApproval from './NApproval';
import NAlarm from './NAlarm';
import NReply from './NReply';
import NReview from './NReview';
import Header from '../Header/Header';

export default function Notice() {
  return (
    <div className={styles.noticecontainer}>
      <div className={styles.header}>
        <Header title="알림" />
      </div>
      <div className={styles.noticearea}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NRefuse />
          </li>
          <li className={styles.li}>
            <NApproval />
          </li>
          <li className={styles.li}>
            <NAlarm />
          </li>
          <li className={styles.li}>
            <NReview />
          </li>
          <li>
            <NReply />
          </li>
          <li className={styles.li}>
            <NRefuse />
          </li>
        </ul>
      </div>
    </div>
  );
}
