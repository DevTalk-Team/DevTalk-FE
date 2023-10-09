import React, { useState } from 'react';
import styles from './FindPw.module.css';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FindPw() {
  const [name, setName] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [email, setEmail] = useState('');

  const gopw = () => {
    axios
      .post('/member/profile/send-password', {
        name: name,
        email: email,
      })
      .then((result) => {
        console.log('요청성공');
        console.log(result);
        navigate('/showpw');
      })
      .catch((error) => {
        console.log('요청실패');
        console.log(error);
      });
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  };

  const navigate = useNavigate();

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
              id="email"
              name="name"
              value={email}
              placeholder="이메일"
              className={styles.input}
              onChange={onChangeEmail}
            />
            <p className={styles.message}>{emailMessage}</p>
          </div>
          <button
            type="submit"
            className={isEmail ? `${styles.yesbtn2}` : `${styles.disbtn2}`}
            onClick={gopw}
            disabled={isEmail === false}
          >
            임시비밀번호 발급
          </button>
        </div>
      </div>
    </div>
  );
}
