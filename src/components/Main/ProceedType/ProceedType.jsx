import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import styles from '../Main.module.css';
import { useRecoilState } from 'recoil';
import { proceedState } from '../../recoil/MatchingAtom';
import MainHeader from '../MainHeader/MainHeader';
import ProceedTypeFormList from './ProceedTypeFormList';

export default function ProceedType() {
  //원하는 진행방식 선택 페이지
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '1시간 비대면 상담',
    },
    {
      id: 1,
      how: '1시간 대면 상담',
    },
  ]);
  const [productProceedType, setProductProceedType] =
    useRecoilState(proceedState);
  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState('');
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);
  const [where, setWhere] = useState('');

  // 클릭 시 진행방식 저장하기
  const handleClick = (i) => {
    const newArr = Array(hows.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    setIsSkillConfirm(true);
    setProductProceedType(hows[i].id);
  };

  useEffect(() => {
    pick();
  }, [isSelect]);

  const pick = () => {
    isSelect.map((item, i) => (item === true ? setChoose(hows[i]) : null));
    if (productProceedType == 1) {
      setWhere('matching_counselingregion');
    } else {
      setWhere('matching_consultantselect');
    }
  };

  useEffect(() => {
    console.log(productProceedType);
  }, [choose]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader
          topic="원하는 진행방식을"
          where={where}
          id={productProceedType}
          check={isSkillConfirm}
        />
      </div>
      <div className={styles.choose1}>
        {hows.map((item, i) => (
          <ProceedTypeFormList
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
