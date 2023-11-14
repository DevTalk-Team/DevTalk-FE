import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import styles from './Counsel.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { counselListState, pageIndexState } from '../../../recoil/MypageAtom';
import { useMatchingAxios } from '../../../apis/config/matching_interceptors';
import { searchConsulterAllConsultations } from '../../../apis/services/consulterMatchingServices';

const Counsel = () => {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useRecoilState(pageIndexState);
  const [_, setCounselList] = useRecoilState(counselListState);

  const onChangePageIndex = (idx) => {
    setPageIndex(idx);
    navigate('/counsel');
  };

  useMatchingAxios();

  const getCounselData = async () => {
    const res = await searchConsulterAllConsultations();
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

export default Counsel;
