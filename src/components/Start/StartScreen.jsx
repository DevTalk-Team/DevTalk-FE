import React, { useState } from 'react';
import styles from './StartScreen.module.css';
import { useNavigate } from 'react-router-dom';
import LoginPopup from '../Popup/LoginPopup';

export default function StartScreen() {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  function gohome() {
    navigate('/login');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Devtalk</h1>
      <div className={styles.btns}>
        <button className={styles.btn1} onClick={() => setModal(true)}>
          개발 상담 바로가기
        </button>
        <div>
          <button className={styles.btn2} onClick={gohome}>
            홈으로 바로가기
          </button>
          {modal === true ? <LoginPopup /> : null}
        </div>
      </div>
    </div>
  );
}
