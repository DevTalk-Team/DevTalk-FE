import React from 'react';
import styles from './HomeScreen.module.css';
import { FaRegBell, FaPen } from 'react-icons/fa';
import { BsPersonCheck } from 'react-icons/bs';
import { RiSettings3Line } from 'react-icons/ri';

export default function HomeScreen() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.appname}>Devtalk</h1>
        <button className={styles.bellicon}>
          <FaRegBell size={25} />
        </button>
      </header>
      <div className={styles.middle}>
        <div className={styles.top}>
          <h3 className={styles.h3}>내 상담 예약 현황</h3>
          <button className={styles.btn1}>전체보기</button>
        </div>
        <div className={styles.reservation}>예약현황</div>
      </div>
      <div className={styles.homemenu}>
        <button className={styles.btn2}>개발 상담 요청하기</button>
        <button className={styles.btn3}>
          <BsPersonCheck size={30} />
          전문가 보러가기
        </button>
        <button className={styles.btn4}>
          <FaPen size={25} />
          후기 보러가기
        </button>
        <button className={styles.btn5}>
          <RiSettings3Line size={30} />
          마이페이지
        </button>
      </div>
    </div>
  );
}
