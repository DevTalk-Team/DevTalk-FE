import React, { useState } from 'react';
import styles from './FindPw.module.css';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

export default function FindPw() {
  const [name, setName] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const [phoneMessage, setPhoneMessage] = useState('');
  const [phone, setPhone] = useState('');

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

  const navigate = useNavigate();
  function gopw() {
    navigate('/showpw');
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="비밀번호 찾기" />
      </div>
      <div className={styles.notion}>
        <ul>
          <li className={styles.li}>
            데브톡의 비밀번호는 암호화 저장되어 <br /> 분실 시 찾아드릴 수 없는
            정보입니다.
          </li>
          <li className={styles.li}>
            가입되어 있는 정보를 기입하시면
            <br /> 임시 비밀번호가 발급됩니다.
          </li>
          <li className={styles.li}>
            임시 비밀번호를 통해 비밀번호를 재설정하여
            <br /> 편하게 서비스를 이용해 주세요.
          </li>
        </ul>
      </div>
      <div className={styles.form}>
        <input
          id="name"
          name="name"
          value={name}
          maxLength={7}
          className={styles.input}
          placeholder="이름"
          onChange={onChangeName}
        />

        <div className={styles.code}>
          <div className={styles.inputdiv}>
            <input
              id="phone"
              name="phone"
              value={phone}
              maxLength={11}
              placeholder="휴대폰번호 입력"
              className={styles.input}
              onChange={onChangePhone}
            />
            <p className={styles.message}>{phoneMessage}</p>
          </div>
          <button
            type="submit"
            className={isPhone ? `${styles.yesbtn2}` : `${styles.disbtn2}`}
            onClick={gopw}
            disabled={isPhone === false}
          >
            임시비밀번호 발급
          </button>
        </div>
      </div>
    </div>
  );
}
