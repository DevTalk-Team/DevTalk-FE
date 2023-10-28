import React, { useEffect, useState } from 'react';
import Header from '../..//Header/Header';
import styles from './CounselTime.module.css';
import TimeTable from './TimeTable';
import DatePick from '../../Main/DateTimePicker/DatePick';
import { useNavigate } from 'react-router-dom';

const CounselTime = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const onOpenModal = () => {};

  const onUpdateDate = () => {
    alert('상담 가능 시간이 변경되었습니다.');
    navigate('/homescreen');
  };

  useEffect(() => {}, []);

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
          <button
            onClick={onUpdateDate}
            className={`${styles.button} ${styles.subText}`}
          >
            다음
          </button>
        </div>
        <div className={styles.typeBox}>
          <p onClick={onOpenModal} className={styles.counselType} />
        </div>
        <p className={styles.subText}>상담 날짜</p>
        <div className={styles.timeBox}>
          <DatePick />
        </div>
        <p className={styles.subText}>상담 시간</p>
        <TimeTable selectedDate={selectedDate} />
        <button className={`${styles.changeButton}`} onClick={onUpdateDate}>
          상담 내용 수정
        </button>
      </div>
    </div>
  );
};

export default CounselTime;
