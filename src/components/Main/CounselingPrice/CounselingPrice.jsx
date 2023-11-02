import React, { useEffect, useState } from 'react';
import styles from './CounselingPrice.module.css';
import Header from '../../Header/Header';
import { useRecoilValue } from 'recoil';
import {
  dateState,
  timeState,
  proceedState,
  consultantPickState,
  regionState,
  detailsState,
  detailsFile,
} from '../../recoil/MatchingAtom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CounselingPrice() {
  //상담비용안내

  //recoil 정보 불러오기
  const CounselingDate = useRecoilValue(dateState);
  const CounselingTime = useRecoilValue(timeState);
  const CounselingType = useRecoilValue(proceedState);
  const CounselingCounsultant = useRecoilValue(consultantPickState);
  const CounselingRegion = useRecoilValue(regionState);
  const CounselingContent = useRecoilValue(detailsState);
  const CounselingFile = useRecoilValue(detailsFile);
  const [whenCounseling, setWhenCounseling] = useState('');
  const [type, setType] = useState(''); //상담유형 수정
  const [typescreen, setTypeScreen] = useState(''); //화면 출력용 상담유형
  useEffect(() => {
    console.log('날짜', CounselingDate);
    console.log('시간', CounselingTime);
    console.log('진행법', CounselingType);
    console.log('전문가', CounselingCounsultant);
    console.log('지역', CounselingRegion);
    console.log('내용', CounselingContent);
    console.log('파일', CounselingFile);
    change();
  }, []);

  useEffect(() => {
    if (CounselingType == 1) {
      setType('F2F');
      setTypeScreen('1시간 대면 상담');
    } else {
      setType('NF2F');
      setTypeScreen('1시간 비대면 상담');
    }
  }, []);

  const navigate = useNavigate();

  function postcounseling() {
    axios
      .post('/matching/consulters/creation/consultations', {
        productProceedType: type,
        region: CounselingRegion,
        reservationDate: CounselingDate,
        reservationTime: CounselingTime.avtime,
        content: CounselingContent,
        attachedFiles: CounselingFile,
        cost: CounselingCounsultant.cost,
      })
      .then((response) => {
        console.log('201', response.data);
        navigate('/matching_done');
        if (response.status === 201) {
          console.log('상담신청 완료');
        }
      })
      .catch((error) => console.log(error.response));
  }

  //상담일시 표기 변경
  const change = () => {
    let D = CounselingDate;

    let y = D.slice(0, 4);
    let m = D.slice(5, 7);
    let d = D.slice(8, 10);

    let h = CounselingTime.avtime.slice(0, 2);
    let mm = CounselingTime.avtime.slice(3, 5);
    setWhenCounseling(
      y + '년 ' + m + '월 ' + d + '일  ' + h + '시' + mm + '분'
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="상담 예약" />
      </div>
      <div className={styles.btnarea} onClick={postcounseling}>
        <button className={styles.btn}>상담 요청 보내기</button>
      </div>
      <div className={styles.block}>
        <p className={styles.topic}>상담 예약 정보</p>
        <div className={styles.moneyarea}>
          <p className={styles.money}>상담 비용</p>
          <p className={styles.money}>{CounselingCounsultant.cost}</p>
        </div>
        <div className={styles.txtblock}>
          <div className={styles.txtarea}>
            <p className={styles.txt}>상담 일시</p>
            <p className={styles.txt2}>{whenCounseling}</p>
          </div>
          <div className={styles.txtarea}>
            <p className={styles.txt}>상담 유형</p>
            <p className={styles.txt2}>{typescreen}</p>
          </div>
          <div className={styles.txtarea}>
            <p className={styles.txt}>상담 전문가</p>
            <p className={styles.txt2}>{CounselingCounsultant.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
