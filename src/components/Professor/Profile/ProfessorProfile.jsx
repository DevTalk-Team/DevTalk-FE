import React from 'react';
import Header from '../../Header/Header';
import styles from './ProfessorProfile.module.css';
import { useRecoilState } from 'recoil';
import { professorInfoState } from '../../../recoil/ProfessorInfoAtom';
import ProfessorHome from './ProfessorHome';
import ProfessorReview from './ProfessorReview';

const ProfessorProfile = () => {
  const [pageIndex, setPageIndex] = useRecoilState(professorInfoState);

  const onChangePageIndex = (idx) => {
    setPageIndex(idx);
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="전문가 소개" />
      </div>
      <div className={styles.professorInfoContent}>
        <div className={styles.infoHeader}>
          <img className={styles.profileImg} src="/logo192.png" alt="error" />
          <p className={styles.mainText}>
            백엔드/서버 10년차
            <br />
            java/SpringBoot/MSA
            <br />
            AWS/Kafka
          </p>
        </div>
        <div className={styles.contentHeader}>
          <button
            name="home"
            onClick={(e) => onChangePageIndex(1)}
            className={
              pageIndex === 1
                ? `${styles.headerTag} ${styles.activeHeaderTag}`
                : styles.headerTag
            }
          >
            전문가 홈
          </button>
          <button
            name="review"
            onClick={() => onChangePageIndex(2)}
            className={
              pageIndex === 2
                ? `${styles.headerTag} ${styles.activeHeaderTag}`
                : styles.headerTag
            }
          >
            의뢰자 후기
          </button>
        </div>
        {pageIndex === 1 ? <ProfessorHome /> : <ProfessorReview />}
      </div>
    </div>
  );
};

export default ProfessorProfile;
