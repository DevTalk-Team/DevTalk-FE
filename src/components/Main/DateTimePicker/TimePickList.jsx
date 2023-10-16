import React, { useState, useEffect } from 'react';
import styles from '../Main.module.css';
import { useRecoilState } from 'recoil';
import { timeState } from '../../recoil/MatchingAtom';
import TimeFormList from './TimeFormList';

export default function TimePickList({ checkTime }) {
  const [times, setTimes] = useState([
    {
      id: 1,
      time: '10:00',
    },
    {
      id: 2,
      time: '10:30',
    },
    {
      id: 3,
      time: '11:00',
    },
    {
      id: 4,
      time: '11:30',
    },
    {
      id: 5,
      time: '12:00',
    },
    {
      id: 6,
      time: '12:30',
    },
    {
      id: 7,
      time: '13:00',
    },
    {
      id: 8,
      time: '13:30',
    },
    {
      id: 9,
      time: '14:00',
    },
    {
      id: 10,
      time: '14:30',
    },
    {
      id: 11,
      time: '15:00',
    },
    {
      id: 12,
      time: '15:30',
    },
  ]);

  const [counsellingTime, setCounsellingTime] = useRecoilState(timeState);
  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState([]);

  const handleClick = (i) => {
    const newArr = Array(times.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    checkTime(true);
    setCounsellingTime(times[i]);
  };

  useEffect(() => {
    pick();
  }, [isSelect]);

  const pick = () => {
    isSelect.map((item, i) => (item === true ? setChoose(times[i]) : null));
  };

  useEffect(() => {
    console.log(counsellingTime);
  }, [choose]);

  return (
    <div>
      <div className={styles.choose5}>
        {times.map((item, i) => (
          <TimeFormList
            key={item.id}
            isSelect={isSelect[i]}
            handleClick={handleClick}
            elementIndex={i}
            timelist={item}
          />
        ))}
      </div>
    </div>
  );
}
