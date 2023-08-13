import React, { useState } from 'react';
import styles from './ProfessorInfo.module.css';
import Header from '../../../Header/Header';

const ProfessorInfo = () => {
  const [intro, setIntro] = useState('');
  const [carrer, setCarrer] = useState('');
  const [field, setField] = useState('');
  const [skill, setSkill] = useState('');

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="전문가 정보" />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.timeTableContent}>
          <div>
            <p className={styles.mainText}>자기 소개 작성</p>
            <textarea
              id={styles.counselContent}
              className={`${styles.normalText} ${styles.contentBox}`}
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
          </div>
          <div>
            <p className={styles.mainText}>커리어</p>
            <textarea
              id={styles.counselContent}
              className={`${styles.normalText} ${styles.contentBox}`}
              value={carrer}
              onChange={(e) => setCarrer(e.target.value)}
            />
          </div>
          <div>
            <p className={styles.mainText}>분야</p>
            <textarea
              id={styles.counselContent}
              className={`${styles.normalText} ${styles.contentBox}`}
              value={field}
              onChange={(e) => setField(e.target.value)}
            />
          </div>
          <div>
            <p className={styles.mainText}>스킬</p>
            <textarea
              id={styles.counselContent}
              className={`${styles.normalText} ${styles.contentBox}`}
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
          </div>
          <p className={styles.mainText}>가격 책정</p>
          <p className={styles.mainText}>상담 가능 분야 카테고리</p>
          <p className={styles.mainText}>상담 가능 분야 기술</p>
          <p className={styles.mainText}>대면 상담 가능 지역 설정</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorInfo;
