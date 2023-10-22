import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './DatePick.module.css';
import { useRecoilState } from 'recoil';
import { dateState } from '../../recoil/MatchingAtom';
import { ko } from 'date-fns/esm/locale';

export default function DatePick() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [counsellingDate, setCounsellingDate] = useRecoilState(dateState);

  useEffect(() => {
    // let D = selectedDate.toISOString();
    // let d = selectedDate.toString();

    // let date = D.slice(0, 10);
    // console.log(date); //2023-08-08
    // let day = d.slice(0, 3);
    // console.log(day); //Wed
    pick();
  }, [selectedDate]);

  const pick = () => {
    setCounsellingDate(selectedDate);
  };

  useEffect(() => {
    console.log(counsellingDate);
  }, [counsellingDate]);

  return (
    <DatePicker
      dateFormat="yyyy년 MM월 dd일" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={new Date()} // minDate 이전 날짜 선택 불가
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      locale={ko}
      popperPlacement="auto"
      className={styles.datepick}
    />
  );
}
