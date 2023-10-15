import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import styles from '../Main.module.css';
import { useRecoilState } from 'recoil';
import { consultantPickState } from '../../recoil/MatchingAtom';
import MainHeader from '../MainHeader/MainHeader';
import ConsultantCard from './ConsultantCard';

export default function ConsultantSelect() {
  //전문가 선택 페이지
  const mentors = useState([
    {
      id: 0,
      img: './',
      name: '데브톡',
      info: '1년차 백엔드개발자 ',

      skill: 'Java,Spring',
      price: '15000원',
      rank: '4.7',
    },
    {
      id: 1,
      img: './',
      name: '데브톡',
      info: '2년차 백엔드개발자 ',
      skill: 'Java,Spring',
      price: '15000원',
      rank: '4.7',
    },
    {
      id: 2,
      img: './',
      name: '데브톡',
      info: '3년차 백엔드개발자 ',
      skill: 'Java,Spring',
      price: '15000원',
      rank: '4.7',
    },
    {
      id: 3,
      img: './',
      name: '데브톡',
      info: '4년차 백엔드개발자 ',
      skill: 'Java,Spring',
      price: '15000원',
      rank: '4.7',
    },
  ]);
  const [consulter, setConsulter] = useRecoilState(consultantPickState);
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);
  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState('');

  const handleClick = (i) => {
    const newArr = Array(mentors.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    setIsSkillConfirm(true);
    setConsulter(mentors[i]);
  };

  useEffect(() => {
    console.log(isSelect);
    pick();
  }, [isSelect]);

  const pick = () => {
    isSelect.map((item, i) => (item === true ? setChoose(mentors[i]) : null));
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
        <MainHeader
          topic="원하는 전문가를"
          where="main5"
          check={isSkillConfirm}
        />
      </div>
      <div className={styles.choose}>
        {mentors.map((item, i) => (
          <ConsultantCard
            key={i}
            mentor={item}
            isSelect={isSelect[i]}
            handleClick={handleClick}
            elementIndex={i}
          />
        ))}
      </div>
    </div>
  );
}
