import React, { useEffect, useState } from 'react';
import styles from './Counsel.module.css';
import CounselCard from './CounselCard';
import {
  waitData,
  doneData,
  cancelData,
} from '../../../model/MyCounselDummyData';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counselListState, pageIndexState } from '../../../recoil/MypageAtom';

const CounselContent = () => {
  const pageIndex = useRecoilValue(pageIndexState);
  const [counselData, setCounselData] = useRecoilState(counselListState);

  useEffect(() => {
    switch (pageIndex) {
      case 1:
        setCounselData(waitData);
        break;
      case 2:
        setCounselData(doneData);
        break;
      case 3:
        setCounselData(cancelData);
        break;
      case 4:
        setCounselData(waitData);
        break;
      default:
        setCounselData(waitData);
        break;
    }
  }, [pageIndex]);

  return (
    <div className={styles.counselContent}>
      {counselData.map((item, index) => {
        return <CounselCard key={index} item={item} />;
      })}
    </div>
  );
};

export default CounselContent;
