import React, { useEffect } from 'react';
import styles from './ProfessorMypage.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import { getMyPage } from '../../../apis/pages';

const ProfessorMypage = () => {
  useEffect(() => {
    // axios.get('/member/mypage').then((res) => {
    //   setData(res);
    //   console.log(res.data);
    // });
    getMyPage().then((res) => {
      console.log('잘 되고 있는거니', res);
    });
  }, []);

  const navigate = useNavigate();

  const movePage = (e) => {
    navigate(`/${e.target.name}`);
  };

  return (
    <div className={styles.mypage}>
      <div className={styles.header}>
        <Header title="마이페이지" />
      </div>
      <div className={styles.content}>
        <button
          name="userInfo2"
          className={styles.button}
          onClick={(e) => movePage(e)}
        >
          회원 정보
        </button>
        <button
          name="counsel"
          className={styles.button}
          onClick={(e) => movePage(e)}
        >
          내 상담 내역
        </button>
        <button
          name="/notice"
          className={styles.button}
          onClick={(e) => movePage(e)}
        >
          공지사항
        </button>
        <button
          name="/terms"
          className={styles.button}
          onClick={(e) => movePage(e)}
        >
          약관
        </button>
        <button className={`${styles.button} ${styles.whiteButton}`}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default ProfessorMypage;
