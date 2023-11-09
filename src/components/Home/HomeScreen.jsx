import React from 'react';
import styles from './HomeScreen.module.css';
import { FaRegBell, FaPen } from 'react-icons/fa';
import { BsPersonCheck } from 'react-icons/bs';
import { RiSettings3Line } from 'react-icons/ri';
import { TbNotes } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import HomeReservation from './HomeReservation';

export default function HomeScreen() {
  const navigate = useNavigate();

  function gomain() {
    navigate('/matching_counselingfield'); //로그인 되었을 경우
  }

  function goboard() {
    navigate('/board');
  }

  function gomentor() {
    navigate('/');
  }

  function goreview() {
    navigate('/');
  }

  function gomypage() {
    navigate('/mypagescreen');
  }

  function goreservation() {
    navigate('/');
  }

  function gonotice() {
    navigate('/noticescreen');
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={'/homescreen'} className={styles.appname}>
          Devtalk
        </Link>
        <button className={styles.bellicon} onClick={gonotice}>
          <FaRegBell size={25} />
        </button>
      </header>
      <div className={styles.middle}>
        <div className={styles.top}>
          <h3 className={styles.h3}>내 상담 예약 현황</h3>
          <button className={styles.btn1} onClick={goreservation}>
            전체보기
          </button>
        </div>
        <div className={styles.reservation_box}>
          <HomeReservation />
          {/* <HomeLogin /> */}
        </div>
      </div>
      <div className={styles.homemenu}>
        <button className={styles.btn2} onClick={gomain}>
          개발 상담 요청하기
        </button>
        <button className={styles.btn3} onClick={goboard}>
          <TbNotes size={30} />
          <div className={styles.btndiv}>
            <span>상담 게시판</span>
          </div>
        </button>
        <button className={styles.btn3} onClick={gomentor}>
          <BsPersonCheck size={30} />
          <div className={styles.btndiv}>
            <span>전문가 보러가기</span>
          </div>
        </button>
        <button className={styles.btn4} onClick={goreview}>
          <FaPen size={25} />
          <div className={styles.btndiv}>
            <span>후기 보러가기</span>
          </div>
        </button>
        <button className={styles.btn5} onClick={gomypage}>
          <RiSettings3Line size={30} />
          <div className={styles.btndiv}>
            <span>마이페이지</span>
          </div>
        </button>
      </div>
    </div>
  );
}
