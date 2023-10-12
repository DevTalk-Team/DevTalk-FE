import React, { useEffect, useState } from 'react';
import styles from '../Main.module.css';
import MainHeader from '../MainHeader/MainHeader';
import Header from '../../Header/Header';
import 'react-datepicker/dist/react-datepicker.css';
import DatePick from './DatePick';
import TimePickList from './TimePickList';

export default function DateTimePicker() {
  // 원하는 예약 시간 및 날짜 선택 페이지
  const [isConfirm, setIsConfirm] = useState(false);
  const checkTime = (i) => {
    setIsConfirm(i);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="예약 시간을" where="main6" check={isConfirm} />
      </div>
      <div className={styles.pickarea}>
        <p className={styles.txt}>상담 날짜</p>
        <div className={styles.datepick}>
          <DatePick />
        </div>
        <p className={styles.txt}>상담 시간</p>
        <div className={styles.timepick}>
          <TimePickList checkTime={checkTime} />
        </div>
      </div>
    </div>
  );
}
