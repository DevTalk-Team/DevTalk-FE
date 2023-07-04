import React from 'react';
import styles from './LoginPopup.module.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPopup() {
  const Navigate = useNavigate();

  function gohome() {
    Navigate('/homescreen');
  }
  function gologin() {
    Navigate('/loginscreen');
  }

  return (
    <div className={styles.modal}>
      <div className={styles.popup}>
        <div>
          <h3>로그인 후 이용 가능합니다</h3>
          <div className={styles.btns}>
            <button className={styles.btn1} onClick={gohome}>
              홈
            </button>
            <button className={styles.btn2} onClick={gologin}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
