import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';
import MainFormList from './MainFormList';

export default function Main1() {
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '15분 전화상담',
    },
    {
      id: 1,
      how: '30분 영상상담',
    },
    {
      id: 2,
      how: '1시간 대면상담',
    },
    {
      id: 3,
      how: '게시판상담',
    },
  ]);

  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState('');
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);

  const handleClick = (i) => {
    const newArr = Array(hows.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    setIsSkillConfirm(true);
  };

  useEffect(() => {
    console.log(isSelect);
    pick();
  }, [isSelect]);

  const pick = () => {
    isSelect.map((item, i) => (item === true ? setChoose(hows[i]) : null));
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
          where="main2"
          check={isSkillConfirm}
        />
      </div>
      <div className={styles.choose1}>
        {hows.map((item, i) => (
          <MainFormList
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
