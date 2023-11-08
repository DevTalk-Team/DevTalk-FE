import React, { useEffect, useState } from 'react';
import styles from './CounselingPrice.module.css';
import Header from '../../Header/Header';
import { useRecoilValue } from 'recoil';
import { userNameState, userEmailState } from '../../../recoil/userAtom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  dateState,
  timeState,
  proceedState,
  consultantPickState,
  regionState,
  detailsState,
  detailsFile,
} from '../../recoil/MatchingAtom';

export default function CounselingPrice() {
  const CounsulterEmail = useRecoilValue(userEmailState);
  const CounselingFile = useRecoilValue(detailsFile);
  const CounselingType = useRecoilValue(proceedState);
  const CounselingDate = useRecoilValue(dateState);
  const CounselingTime = useRecoilValue(timeState);
  const CounselingCounsultant = useRecoilValue(consultantPickState);

  const [whenCounseling, setWhenCounseling] = useState('');

  const [typescreen, setTypeScreen] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('날짜', CounselingFile);
    change();
  }, []);

  useEffect(() => {
    if (CounselingType === 1) {
      setTypeScreen('1시간 대면 상담');
    } else {
      setTypeScreen('1시간 비대면 상담');
    }
  }, []);

  async function postcounseling() {
    try {
      const response = await axios.post(
        '/matching/consulters/reserve/consultations',

        CounselingFile,

        {
          headers: {
            'User-Email': CounsulterEmail,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('201', response.data);
      navigate('/matching_done');

      if (response.status === 201) {
        console.log('상담신청 완료', response);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

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
