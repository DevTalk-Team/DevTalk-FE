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
} from '../../recoil/MatchingAtom';
import { useNavigate } from 'react-router-dom';

export default function CounselingPrice() {
  //상담비용안내

  //recoil 정보 불러오기
  const CounselingDate = useRecoilValue(dateState);
  const CounselingTime = useRecoilValue(timeState);
  const CounselingType = useRecoilValue(proceedState);
  const CounselingCounsultant = useRecoilValue(consultantPickState);
  const CounselingRegion = useRecoilValue(regionState);
  const CounselingContent = useRecoilValue(detailsState);
  const [whenCounseling, setWhenCounseling] = useState('');

  useEffect(() => {
    console.log('날짜', CounselingDate);
    console.log('시간', CounselingTime);
    console.log('진행법', CounselingType);
    console.log('전문가', CounselingCounsultant);
    change();
  }, []);

  const navigate = useNavigate();

  function postcounseling() {
    //전문가 회원가입
    // axios
    //   .post('/matching/consulters/creation/consultations', {
    //     productProceedType: CounselingType.how, //상담방식(각각 뭐를 보내야하는지?ex.F2F)
    //     region: CounselingRegion,//상담지역(비대면일 경우에는?)
    //     reservationDate: CounselingDate,//날짜 Tue Oct 24 2023 23:22:52 GMT+0900 (한국 표준시)
    //     reservationTime: CounselingTime,//시간{id: 6, time: '12:30'}
    //     content: CounselingContent,//상담내용(지금은 TXT만 가요)
    //     cost: CounselingCounsultant.price,//가격
    //   })
    //   .then((response) => {
    //     console.log('201', response.data);
    //     navigate('/main8');
    //     if (response.status === 201) {
    //       console.log('상담신청 완료');
    //     }
    //   })
    //   .catch((error) => console.log(error.response));
  }

  const change = () => {
    let D = CounselingDate.toISOString();
    // let d = CounselingDate.toString();

    let y = D.slice(0, 4);
    let m = D.slice(5, 7);
    let d = D.slice(8, 10);

    let h = CounselingTime.time.slice(0, 2);
    let mm = CounselingTime.time.slice(3, 5);
    setWhenCounseling(
      y + '년 ' + m + '월 ' + d + '일  ' + h + '시' + mm + '분'
    );

    // let day = d.slice(0, 3);
    // console.log(day); //Wed
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
          <p className={styles.money}>{CounselingCounsultant.price}</p>
        </div>
        <div className={styles.txtblock}>
          <div className={styles.txtarea}>
            <p className={styles.txt}>상담 일시</p>
            <p className={styles.txt2}>{whenCounseling}</p>
          </div>
          <div className={styles.txtarea}>
            <p className={styles.txt}>상담 유형</p>
            <p className={styles.txt2}>{CounselingType.how}</p>
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
