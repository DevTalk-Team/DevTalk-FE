import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Header/Header';
import styles from '../Main.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  fieldState,
  techState,
  proceedState,
  regionState,
  consultantPickState,
} from '../../recoil/MatchingAtom';
import MainHeader from '../MainHeader/MainHeader';
import ConsultantCard from './ConsultantCard';
import { getMatchingPage } from '../../../apis/pages';

export default function ConsultantSelect() {
  //전문가 선택 페이지
  const type = useRecoilValue(fieldState);
  const category = useRecoilValue(techState);
  const proceed = useRecoilState(proceedState);
  const where = useRecoilState(regionState);

  const [f2f, setF2f] = useState('');
  const [region, setRegion] = useState('');
  const [consultant, setConsultant] = useState([]);

  // recoil 저장 값 배열에서 뺴내기
  useEffect(() => {
    if (proceed[0] === 1) {
      setF2f('true');
      setRegion(where[0]);
    }
  }, [proceed, where]);

  // 서버에서 조건에 맞는 전문가 리스트 불러오기
  useEffect(() => {
    getMatchingPage({ type, category, f2f, region })
      .then((response) => {
        setConsultant(response.data.result);

        if (response && response.status === 200) {
          // response 존재 여부를 추가로 검사합니다.
          console.log('비대면 시 전문가 불러오기 성공');
        }
      })
      .catch((error) => {
        console.log(error);
        console.log('오류!!');
      });
  }, [type, category, f2f, region]);

  const [consulter, setConsulter] = useRecoilState(consultantPickState);
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);
  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState('');

  const handleClick = (i) => {
    const newArr = Array(consultant.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    setIsSkillConfirm(true);
    setConsulter(consultant[i]);
  };

  useEffect(() => {
    pick();
  }, [isSelect]);

  const pick = () => {
    isSelect.map((item, i) =>
      item === true ? setChoose(consultant[i]) : null
    );
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
          where="matching_datetime"
          check={isSkillConfirm}
        />
      </div>
      <div className={styles.choose}>
        {consultant.map((item, i) => (
          <ConsultantCard
            key={i}
            consultant={item}
            isSelect={isSelect[i]}
            handleClick={handleClick}
            elementIndex={i}
          />
        ))}
      </div>
    </div>
  );
}
