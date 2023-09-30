import React, { useEffect, useState } from 'react';
import mainStyles from '../../../Main/Main.module.css';
import styles from './ProfessorInfo.module.css';
import Header from '../../../Header/Header';
import MainFormList from '../../../Main/MainFormList';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  //비대면 상담 시 원하는 지역 선택 페이지
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '서울',
    },
    {
      id: 1,
      how: '경기',
    },
    {
      id: 2,
      how: '인천',
    },
    {
      id: 3,
      how: '부산',
    },
    {
      id: 4,
      how: '대구',
    },
    {
      id: 5,
      how: '광주',
    },
    {
      id: 6,
      how: '대전',
    },
    {
      id: 7,
      how: '울산',
    },
    {
      id: 8,
      how: '세종',
    },
    {
      id: 9,
      how: '강원',
    },
    {
      id: 10,
      how: '충북',
    },
    {
      id: 11,
      how: '충남',
    },
    {
      id: 12,
      how: '전북',
    },
    {
      id: 13,
      how: '전남',
    },
    {
      id: 14,
      how: '경북',
    },
    {
      id: 15,
      how: '경남',
    },
    {
      id: 16,
      how: '제주',
    },
  ]);

  const [isSelect, setIsSelect] = useState([]);
  const [choose, setChoose] = useState([]);
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);

  const navigate = useNavigate();

  const handleClick = (i) => {
    const newArr = Array(hows.length).fill(false);
    newArr[i] = true;
    setIsSelect(newArr);
    setIsSkillConfirm(true);
  };

  const updateData = () => {
    navigate(-1);
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
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="전문가 정보" />
      </div>
      <div className={styles.subTitle}>
        <p className={styles.mainText}>대면 상담 가능 지역 설정</p>
      </div>
      <div className={styles.selectBox}>
        {hows.map((item, i) => (
          <MainFormList
            className={mainStyles.list}
            key={i}
            isSelect={isSelect[i]}
            handleClick={handleClick}
            elementIndex={i}
            itemlist={item}
          />
        ))}
      </div>
      <div className={styles.bottomContent}>
        <button
          className={`${styles.button} ${styles.subText}`}
          onClick={updateData}
        >
          수정
        </button>
        <button
          className={`${styles.button} ${styles.subText} ${styles.cancel}`}
          onClick={updateData}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default Location;
