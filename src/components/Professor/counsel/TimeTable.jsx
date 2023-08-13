import React from 'react';
import styles from './TimeTable.module.css';

const TimeTable = () => {
  const dayOf = ['오전', '오후'];
  const times = [
    '오전 10:00',
    '오전 10:30',
    '오전 11:00',
    '오전 11:30',
    '오후 12:00',
    '오후 12:30',
    '오후 13:00',
    '오후 13:30',
    '오후 14:00',
    '오후 14:30',
    '오후 15:00',
    '오후 15:30',
    '오후 16:00',
    '오후 16:30',
    '오후 17:00',
    '오후 17:30',
    '오후 18:00',
    '오후 18:30',
    '오후 19:00',
    '오후 19:30',
  ];
  return (
    <div className={styles.tableBox}>
      {times.map((time, index) => {
        return (
          <div className={styles.timeTableBox}>
            <p>{time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TimeTable;
