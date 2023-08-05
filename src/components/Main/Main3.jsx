import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import MainHeader from './MainHeader';
import Header from '../Header/Header';
import MainFormList from './MainFormList';

export default function Main3() {
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
  const [choose, setChoose] = useState([]);
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);
  const [skillConfirmMessage, setSkillConfirmMessage] = useState('');

  useEffect(() => {
    console.log(choose);
    console.log(choose.length);
  }, [choose]);

  const onUpdate = (picked) => {
    setChoose([...choose, picked]);
  };
  const onDelete = (deleted) => {
    setChoose(choose.filter((t) => t.id !== deleted.id));
  };

  useEffect(() => {
    if (choose.length > 5) {
      setSkillConfirmMessage('최대 5개만 선택 가능합니다.');
      setIsSkillConfirm(false);
    } else if (choose.length < 1) {
      setIsSkillConfirm(false);
    } else {
      setSkillConfirmMessage('');
      setIsSkillConfirm(true);
    }
  }, [choose]);
  //기술분야
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader topic="기술 분야를" where="main4" check={isSkillConfirm} />
      </div>
      <div className={styles.choose3}>
        {hows.map((item) => (
          <MainFormList
            key={item.id}
            itemlist={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
