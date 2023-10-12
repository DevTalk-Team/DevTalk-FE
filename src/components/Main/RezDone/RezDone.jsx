import React from 'react';
import { MdDoneOutline } from 'react-icons/md';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import styles from './RezDone.module.css';
import { useNavigate } from 'react-router-dom';

export default function RezDone() {
  //예약완료페이지
  const navigate = useNavigate();

  const gohome = () => {
    navigate('/homescreen');
  };

  const golist = () => {
    navigate('/');
  };
  return (
    <>
      <header className={styles.header}>
        <h3>예약완료</h3>
      </header>
      <div className={styles.container}>
        <div className={styles.iconarea}>
          <MdDoneOutline size={60} className={styles.icon} />
        </div>
        <div className={styles.txtarea}>
          <p className={styles.txt}>
            상담 요청이 완료 되었습니다.
            <br />
            전문가의 승인을 기다려주세요.
          </p>
        </div>
        <div className={styles.btns}>
          <button className={styles.btn1} onClick={golist}>
            {/* <FaArrowUpRightFromSquare size={20} /> */}
            상담 요청 내역 바로가기
          </button>
          <button className={styles.btn2} onClick={gohome}>
            홈 바로가기
          </button>
        </div>
      </div>
    </>
  );
}
