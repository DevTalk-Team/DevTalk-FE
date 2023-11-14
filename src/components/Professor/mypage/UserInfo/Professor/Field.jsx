import React, { useEffect, useState } from 'react';
import mainStyles from '../../../Main/Main.module.css';
import styles from './ProfessorInfo.module.css';
import Header from '../../../Header/Header';
import MainFormList from '../../../Main/EtcRezPages/MainFormList';
import { useNavigate } from 'react-router-dom';

const Field = () => {
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '웹',
    },
    {
      id: 1,
      how: '서버',
    },
    {
      id: 2,
      how: '디자인',
    },
    {
      id: 3,
      how: '데브옵스',
    },
    {
      id: 4,
      how: '빅데이터',
    },
    {
      id: 5,
      how: '클라우드',
    },
    {
      id: 6,
      how: '핀테크',
    },
    {
      id: 7,
      how: '보안',
    },
    {
      id: 8,
      how: '모바일앱',
    },
    {
      id: 9,
      how: '게임',
    },
    {
      id: 10,
      how: '임베디드',
    },
    {
      id: 11,
      how: 'DB',
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
        <p className={styles.mainText}>상담 가능분야 기술</p>
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

export default Field;
