import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';
import MainFormList from './MainFormList';

export default function Main2({ pageid }) {
  //상담분야선택페이지

  const [hows, setHows] = useState([
    {
      id: 0,
      how: '커리어',
    },
    {
      id: 1,
      how: '개발 장애',
    },
    {
      id: 2,
      how: '멘토 섭외',
    },
    {
      id: 3,
      how: '개발 외주',
    },
    {
      id: 4,
      how: '개발 컨설팅',
    },
    {
      id: 5,
      how: '개발 팀 구성',
    },
  ]);
  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState([]);
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="상담 분야를" where="main3" check={isSkillConfirm} />
      </div>
      <div className={styles.choose2}>
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
