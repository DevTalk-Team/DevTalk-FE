import React, { useState } from 'react';
import styles from '../Main.module.css';
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
        <p className={styles.askform}>
          상담할 내용을 <br />
          자세히 작성해주세요
        </p>
      </div>
      <div className={styles.pickarea}>
        <AskForm checkTxt={checkTxt} />
      </div>
    </div>
  );
}
