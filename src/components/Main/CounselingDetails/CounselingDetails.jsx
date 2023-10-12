import React, { useState } from 'react';
import styles from '../Main.module.css';
import MainHeader from '../MainHeader/MainHeader';
import Header from '../../Header/Header';
import AskForm from './AskForm';

export default function CounselingDetails() {
  //원하는 상담 내용
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);

  const checkTxt = (i) => {
    setIsSkillConfirm(i);
  };
  //상담내용
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.mainheader}>
        <MainHeader
          topic="상담 받을 내용을"
          where="main7"
          check={isSkillConfirm}
        />
      </div>
      <div className={styles.pickarea}>
        <AskForm checkTxt={checkTxt} />
      </div>
    </div>
  );
}
