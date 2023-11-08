import React, { useState, useEffect } from 'react';
import styles from './HomeReservation.module.css';
import { getConsultantRezInfo } from '../../apis/pages';
import { userEmailState } from '../../recoil/userAtom';
import { useRecoilValue } from 'recoil';

export default function HomeReservation() {
  const CounsulterEmail = useRecoilValue(userEmailState);
  const [userRezInfo, setUserRezInfo] = useState([]);

  useEffect(() => {
    getConsultantRezInfo(CounsulterEmail)
      .then((response) => {
        console.log('이건 출력', response.data.result);

        setUserRezInfo(response.data.result);
        if (response && response.status === 200) {
          console.log('예약 정보 불러오기 성공');
        }
      })
      .catch((error) => {
        console.log(error);
        console.log('예약 정보 불러오기 오류!!');
      });
  }, []);

  useEffect(() => {
    console.log('정보1', userRezInfo);
    console.log('정보1', userRezInfo.length);
  }, [userRezInfo]);

  return (
    <>
      {userRezInfo.length > 0 && (
        <div className={styles.container}>
          <div className={styles.reservation}>
            <img
              className={styles.mentorphoto}
              src={'./logo192.png'}
              alt="mentor"
            />
            <div>
              <p className={styles.p}>
                <strong>{userRezInfo[0].consultantName}</strong> 님
              </p>
              <p className={styles.p}>
                {userRezInfo[0].consultationDetails.reservationDate}
              </p>
              <p className={styles.p}>
                {userRezInfo[0].consultationDetails.reservationTime}
              </p>
            </div>
            <button className={styles.btn}>예약확인</button>
          </div>
        </div>
      )}

      {userRezInfo.length > 1 && (
        <div className={styles.container}>
          <div className={styles.reservation}>
            <img
              className={styles.mentorphoto}
              src={'./logo192.png'}
              alt="mentor"
            />
            <div>
              <p className={styles.p}>
                <strong>{userRezInfo[1].consultantName}</strong> 님
              </p>
              <p className={styles.p}>
                {userRezInfo[1].consultationDetails.reservationDate}
              </p>
              <p className={styles.p}>
                {userRezInfo[1].consultationDetails.reservationTime}
              </p>
            </div>
            <button className={styles.btn}>예약확인</button>
          </div>
        </div>
      )}
    </>
  );
}
