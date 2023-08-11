import React, { useState, useEffect } from 'react';
import styles from '../Main.module.css';
import MainHeader from '../MainHeader';
import Header from '../../Header/Header';
import Main1FormList from './Main1FormList';

export default function Main1() {
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '1시간 비대면 상담',
    },
    {
      id: 1,
      how: '1시간 대면 상담',
    },
    {
      id: 2,
      how: '게시판 상담',
    },
  ]);

  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState('');
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);
  const [how, setHow] = useState(0);
  const [where, setWhere] = useState('');

  const handleClick = (i, id) => {
    const newArr = Array(hows.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    setIsSkillConfirm(true);
    setHow(id);
  };

  useEffect(() => {
    console.log(isSelect);
    pick();
  }, [isSelect]);

  const pick = () => {
    isSelect.map((item, i) => (item === true ? setChoose(hows[i]) : null));
    if (how == 1) {
      setWhere('main9');
    } else {
      setWhere('main2');
    }
  };
  useEffect(() => {
    console.log(choose);
  }, [choose]);

  // //진행방식
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader
          topic="원하는 진행방식을"
          where={where}
          check={isSkillConfirm}
        />
      </div>
      <div className={styles.choose1}>
        {hows.map((item, i) => (
          <Main1FormList
            key={i}
            isSelect={isSelect[i]}
            handleClick={handleClick}
            elementIndex={i}
            itemlist={item}
          />
        ))}
      </div>
    </div>
  );
}
