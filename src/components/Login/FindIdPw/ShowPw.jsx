import { React, useState } from 'react';
import styles from './ShowPw.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import axios from 'axios';

export default function ShowPw() {
  const [password, setPassword] = useState('');
  const [secretpw, setSecretPw] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [secretPasswordMessage, setsecretPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const lastpw = '12345';

  const onSecretPw = (e) => {
    //임시비번을 확인하는 절차
    const secretPassword = e.target.value;
    setSecretPw(secretPassword);
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        '8자 이상의 영문자,숫자,특수문자 조합으로 입력해주세요.'
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('사용 가능한 비밀번호 입니다.');
      setIsPassword(true);
    }
  };

  const navigate = useNavigate();

  function pw() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/member/profile/change-password`, {
        password: secretpw,
        newPassword: password,
      })
      .then((response) => {
        console.log('200', response.data);

        if (response.status === 200) {
          console.log('비밀번호 찾기 인증 성공');
        }

        navigate('/loginscreen');
      })
      .catch((error) => {
        console.log(error.response);
        setsecretPasswordMessage('임시비밀번호가 일치하지 않습니다.');
      });
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="비밀번호 재설정" />
      </div>
      <div>
        <p className={styles.p}>비밀번호를 재설정해 주세요</p>
      </div>
      <div className={styles.pwform}>
        <div className={styles.form}>
          <input
            id="password"
            name="password"
            type="password"
            maxLength={16}
            placeholder="임시 비밀번호"
            className={styles.input}
            value={secretpw}
            onChange={onSecretPw}
          />
          <p className={styles.message}>{secretPasswordMessage}</p>
          <input
            id="newpassword"
            type="password"
            name="newpassword"
            placeholder="새로운 비밀번호"
            className={styles.input}
            value={password}
            onChange={onChangePassword}
          />
          <p className={styles.message}>{passwordMessage}</p>
          <button
            className={isPassword ? `${styles.yesbtn}` : `${styles.disbtn}`}
            onClick={pw}
            disabled={isPassword === false}
          >
            비밀번호 변경 완료
          </button>
        </div>
      </div>
    </div>
  );
}
