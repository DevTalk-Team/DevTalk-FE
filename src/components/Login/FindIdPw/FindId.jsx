import React, { useState } from 'react';
import styles from './FindId.module.css';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function FindId() {
  const [name, setName] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const [isCode, setIsCode] = useState(true);
  const [phoneMessage, setPhoneMessage] = useState('');
  const [codeMessage, setCodeMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
  };

  const onChangePhone = (e) => {
    const currentNumber = e.target.value;
    setPhone(currentNumber);
    const phoneRegExp = /^010-?([0-9]{4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentNumber)) {
      setPhoneMessage('올바른 형식이 아닙니다.');
      setIsPhone(false);
    } else {
      setPhoneMessage('');
      setIsPhone(true);
    }
  };

  const onCodeChange = (e) => {
    const currentCode = e.target.value;
    setCode(currentCode);

    if (0) {
      //인증번호와 같지 않으면
      setCodeMessage('옳지 않은 인증번호입니다.');
      setIsCode(false);
    } else {
      setCodeMessage('');
      setIsCode(true);
    }
  };
  const navigate = useNavigate();
  function goid() {
    navigate('/showid');
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="아이디 찾기" />
      </div>
      <div className={styles.form}>
        <div className={styles.pdiv}>
          <p className={styles.p}>이름</p>
        </div>
        <input
          id="name"
          name="name"
          value={name}
          maxLength={7}
          className={styles.input}
          placeholder="이름"
          onChange={onChangeName}
        />
        <div className={styles.pdiv}>
          <p className={styles.p}>휴대폰 인증</p>
        </div>
        <div className={styles.code}>
          <div>
            <input
              id="phone"
              name="phone"
              value={phone}
              maxLength={11}
              placeholder="휴대폰번호 입력"
              className={styles.input1}
              onChange={onChangePhone}
            />
            <p className={styles.message}>{phoneMessage}</p>
          </div>
          <button
            type="submit"
            className={isPhone ? `${styles.yesbtn2}` : `${styles.disbtn2}`}
            // onClick={gophone}
            disabled={isPhone === false}
          >
            인증
          </button>
          <p className={styles.message}>{phoneMessage}</p>
        </div>
        <input
          id="code"
          name="code"
          value={code}
          placeholder="인증번호 입력"
          onChange={onCodeChange}
          className={styles.input2}
        />
        <button
          type="submit"
          className={isCode ? `${styles.yesbtn}` : `${styles.disbtn}`}
          onClick={goid}
          disabled={isCode === false}
        >
          아이디 찾기
        </button>
      </div>
    </div>
  );
}
