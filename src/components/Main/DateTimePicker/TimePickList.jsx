import React, { useState, useEffect } from 'react';
import styles from '../Main.module.css';
import { useRecoilState } from 'recoil';
import {
  timeState,
  consultantPickState,
  dateState,
} from '../../recoil/MatchingAtom';
import TimeFormList from './TimeFormList';
import { getConsultantTime } from '../../../apis/pages';
import { v4 as uuidv4 } from 'uuid';

export default function TimePickList({ checkTime }) {
  const consultant = useRecoilState(consultantPickState);
  const date = useRecoilState(dateState);
  const [mentor, setMentor] = useState('');
  const [time, setTime] = useState([]);
  const [avtime, setAvTime] = useState([]);
  // recoil 저장 값 배열에서 뺴내기
  useEffect(() => {
    setMentor(consultant[0].id);
  }, [consultant]);

  useEffect(() => {
    if (mentor) {
      getConsultantTime(mentor, date)
        .then((response) => {
          console.log(response);
          const available = response.data.result.map((item) => ({
            id: item.productId,
            avtime: item.reservationTime.slice(0, 5),
          }));
          setTime(available);
          console.log('가능한 시간', available);

          if (response && response.status === 200) {
            console.log('가능한 시간 불러오기 성공');
          }
        })
        .catch((error) => {
          console.log(error);
          console.log('시간 불러오기 오류!!');
        });
    }
  }, [mentor]);

  const [counsellingTime, setCounsellingTime] = useRecoilState(timeState);
  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState([]);

  const handleClick = (i) => {
    const newArr = Array(time.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    checkTime(true);
    setCounsellingTime(time[i]);
  };

  useEffect(() => {
    pick();
  }, [isSelect]);

  const pick = () => {
    isSelect.map((item, i) => (item === true ? setChoose(time[i]) : null));
  };

  useEffect(() => {
    console.log(counsellingTime);
  }, [choose]);

  return (
    <div>
      <div className={styles.choose5}>
        {time.map((item, i) => (
          <TimeFormList
            key={item.id}
            isSelect={isSelect[i]}
            handleClick={handleClick}
            elementIndex={i}
            timelist={item.avtime}
          />
        ))}
      </div>
    </div>
  );
}
