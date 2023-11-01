import React, { useState, useEffect } from 'react';
import styles from '../Main.module.css';
import { useRecoilState } from 'recoil';
import { dateState } from '../../recoil/MatchingAtom';
import MainHeader from '../MainHeader/MainHeader';
import Header from '../../Header/Header';
import 'react-datepicker/dist/react-datepicker.css';
import DatePick from './DatePick';
import TimePickList from './TimePickList';

export default function DateTimePicker() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [date] = useRecoilState(dateState);

  const checkTime = (i) => {
    setIsConfirm(i);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader
          topic="예약 시간을"
          where="matching_details"
          check={isConfirm}
        />
      </div>
      <div className={styles.pickarea}>
        <p className={styles.txt}>상담 날짜</p>
        <div className={styles.datepick}>
          <DatePick />
        </div>
        <>
          <p className={styles.txt}>상담 시간</p>

          <div className={styles.timepick}>
            <TimePickList checkTime={checkTime} />
          </div>
        </>
      </div>
    </div>
  );
}
