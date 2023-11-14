import React, { useEffect, useState } from 'react';
import styles from './ProfessorCounsel.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMatchingAxios } from '../../../../apis/config/matching_interceptors';
import { searchAllConsultations } from '../../../../apis/services/matchingServices';
import {
  professorCounselListState,
  professorPageIndexState,
} from '../../../../recoil/MypageAtom';
import Header from '../../../Header/Header';

const ProfessorCounsel = () => {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useRecoilState(professorPageIndexState);
  const [_, setCounselList] = useRecoilState(professorCounselListState);

  const onChangePageIndex = (idx) => {
    setPageIndex(idx);
    navigate('/professorCounsel');
  };

  useMatchingAxios();

  const getCounselData = async () => {
    const res = await searchAllConsultations();
    setCounselList(res);
  };

  useEffect(() => {
    getCounselData();
  }, []);

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="내 상담 내역" />
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <button
            name="wait"
            onClick={(e) => onChangePageIndex(1)}
            className={
              pageIndex === 1
                ? `${styles.headerTag} ${styles.activeHeaderTag}`
                : styles.headerTag
            }
          >
            대기중
          </button>
          <button
            name="done"
            onClick={() => onChangePageIndex(2)}
            className={
              pageIndex === 2
                ? `${styles.headerTag} ${styles.activeHeaderTag}`
                : styles.headerTag
            }
          >
            상담완료
          </button>
          <button
            name="cancel"
            onClick={(e) => onChangePageIndex(3)}
            className={
              pageIndex === 3
                ? `${styles.headerTag} ${styles.activeHeaderTag}`
                : styles.headerTag
            }
          >
            취소됨
          </button>
          <button
            name="board"
            onClick={() => onChangePageIndex(4)}
            className={
              pageIndex === 4
                ? `${styles.headerTag} ${styles.activeHeaderTag}`
                : styles.headerTag
            }
          >
            게시글
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfessorCounsel;
