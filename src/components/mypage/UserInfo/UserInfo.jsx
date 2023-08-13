import React from 'react';
import Header from '../../Header/Header';
import styles from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="회원 정보" />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          본인 확인을 위해 비밀번호를 <br /> 입력해 주세요
        </p>
        <input className={styles.input} placeholder="비밀번호 입력" />
        <button className={styles.button}>확인</button>
      </div>
    </div>
  );
};

export default UserInfo;
