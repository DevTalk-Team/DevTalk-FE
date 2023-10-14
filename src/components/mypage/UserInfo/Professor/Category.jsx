import React, { useEffect, useState } from 'react';
import mainStyles from '../../../Main/Main.module.css';
import styles from './ProfessorInfo.module.css';
import Header from '../../../Header/Header';
import MainFormList from '../../../Main/MainFormList';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [hows, setHows] = useState([
    {
      id: 0,
      how: '커리어 상담',
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
        <p className={styles.mainText}>상담 가능 분야 카테고리</p>
      </div>
      <div className={styles.categoryBox}>
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

export default Category;
