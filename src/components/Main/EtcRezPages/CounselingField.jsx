import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import styles from '../Main.module.css';
import { useRecoilState } from 'recoil';
import { fieldState } from '../../recoil/MatchingAtom';
import MainHeader from '../MainHeader/MainHeader';
import MainFormList from '../EtcRezPages/MainFormList';

export default function CounselingField() {
  //상담분야선택페이지

  const [hows, setHows] = useState([
    {
      id: 0,
      how: '커리어',
    },
    {
      id: 1,
      how: '개발장애',
    },
    {
      id: 2,
      how: '멘토섭외',
    },
    {
      id: 3,
      how: '개발외주',
    },
    {
      id: 4,
      how: '개발컨설팅',
    },
    {
      id: 5,
      how: '개발팀구성',
    },
  ]);
  const [counselingField, setCounselingField] = useRecoilState(fieldState);
  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState([]);
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);

  const handleClick = (i) => {
    const newArr = Array(hows.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    setIsSkillConfirm(true);
    setCounselingField(hows[i].how);
  };

  useEffect(() => {
    pick();
  }, [isSelect]);

  const pick = () => {
    isSelect.map((item, i) => (item === true ? setChoose(hows[i]) : null));
  };

  useEffect(() => {
    console.log(counselingField);
  }, [choose]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={'상담 예약'} />
      </div>
      <div className={styles.mainheader}>
        <MainHeader
          topic="상담 분야를"
          where="matching_techfield" //기술분야
          check={isSkillConfirm}
        />
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
