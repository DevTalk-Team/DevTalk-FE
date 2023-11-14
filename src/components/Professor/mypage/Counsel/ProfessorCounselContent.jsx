import React, { useEffect, useState } from 'react';
import styles from './ProfessorCounsel.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  professorCounselListState,
  professorPageIndexState,
} from '../../../../recoil/MypageAtom';
import ProfessorCounselCard from './ProfessorCounselCard';

const ProfessorCounselContent = () => {
  const pageIndex = useRecoilValue(professorPageIndexState);
  const [counselDataList, setCounselDataList] = useRecoilState(
    professorCounselListState
  );
  const [counselData, setCounselData] = useState();

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
      {counselData.map((item, index) => {
        return <ProfessorCounselCard key={index} item={item} />;
      })}
    </div>
  );
};

export default ProfessorCounselContent;
