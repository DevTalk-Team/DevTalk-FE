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
  const [counselDataList, setCounselDataList] =
    useRecoilState(counselListState);
  const [counselData, setCounselData] = useState([]);

  useEffect(() => {
    let filteredData = [];
    switch (pageIndex) {
      case 1:
        filteredData = counselDataList.filter(
          (item) => item.status === 'ACCEPT_WAIT'
        );
        break;
      case 2:
        filteredData = counselDataList.filter(
          (item) => item.status === 'REVIEWED'
        );
        break;
      case 3:
        filteredData = counselDataList.filter(
          (item) =>
            item.status === 'CONSULTANT_REFUSED' ||
            item.status === 'CONSULTANT_CANCELED' ||
            item.status === 'CONSULTER_CANCELED'
        );
        break;
      case 4:
        filteredData = counselDataList.filter(
          (item) => item.status === 'ACCEPT_WAIT'
        );
        break;
      default:
        filteredData = counselDataList.filter(
          (item) => item.status === 'ACCEPT_WAIT'
        );
        break;
    }
    setCounselData(filteredData);
  }, [pageIndex]);

  return (
    <div className={styles.counselContent}>
      {counselData.length !== 0 &&
        counselData.map((item, index) => {
          return <CounselCard key={index} item={item} />;
        })}
    </div>
  );
};

export default CounselContent;
