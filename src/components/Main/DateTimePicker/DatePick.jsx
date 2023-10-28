import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './DatePick.module.css';
import { useRecoilState } from 'recoil';
import { dateState } from '../../recoil/MatchingAtom';
import { ko } from 'date-fns/esm/locale';

export default function DatePick() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [counsellingDate, setCounsellingDate] = useRecoilState(dateState);

  const [check, setCheck] = useState(0);

  useEffect(() => {
    let D = selectedDate.toLocaleDateString('ko-KR');
    let DD = D.replaceAll('.', '-').replace(/\s/g, '');
    let date = DD.slice(0, 10);
    let [year, month, day] = date.split('-');

    if (day.length === 1) {
      day = '0' + day;
    }

    date = `${year}-${month}-${day}`;

    pick(date);
  }, [selectedDate]);

  const pick = (date) => {
    setCounsellingDate(date);
    setCheck(1);
  };

  useEffect(() => {
    console.log(counsellingDate);
  }, [counsellingDate]);

  useEffect(() => {
    setCheck(0);
  }, []);

  return (
    <div className={styles.container}>
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
      <button
        className={check == 1 ? `${styles.timebtn}` : `${styles.distimebtn}`}
        disabled={check == 0}
      >
        가능한 시간 보기
      </button>
    </div>
  );
}
