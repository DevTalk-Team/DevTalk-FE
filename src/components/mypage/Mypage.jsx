import React from "react";
import styles from "./Mypage.module.css";
import Header from "../Header/Header";

const Mypage = () => {
  return (
    <div className={styles.mypage}>
      <div className={styles.header}>
        <Header title="마이페이지" />
      </div>
      <div className={styles.content}>
        <button className={styles.button}>회원 정보</button>
        <button className={styles.button}>내 상담 내역</button>
        <button className={styles.button}>공지사항</button>
        <button className={styles.button}>약관</button>
        <button className={styles.button}>로그아웃</button>
      </div>
    </div>
  );
};

export default Mypage;
