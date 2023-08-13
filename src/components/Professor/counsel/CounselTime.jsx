import React, { useState } from 'react';
import Header from '../..//Header/Header';
import styles from './CounselTime.module.css';
import TimeTable from './TimeTable';

const CounselTime = () => {
  const [counselType, setCounselType] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onOpenModal = () => {};

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="상담 시간 설정" />
      </div>
      <div className={styles.timeTableContent}>
        <div className={styles.timeTableHeader}>
          <p className={styles.headerText}>
            상담 가능 시간을
            <br />
            선택해 주세요
          </p>
          <button className={`${styles.button} ${styles.subText}`}>다음</button>
        </div>
        <div className={styles.typeBox}>
          <p onClick={onOpenModal} className={styles.counselType}>
            {counselType}
          </p>
        </div>
        <div className={styles.timeBox}>
          <p className={styles.subText}>상담 날짜</p>
        </div>
        <TimeTable />
      </div>
    </div>
  );
};

export default CounselTime;
