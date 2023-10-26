import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userEmailState, userNameState } from '../../recoil/userAtom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const Navigate = useNavigate();

  const [userEamil, setUserEmail] = useRecoilState(userEmailState);
  const [userName, setUserName] = useRecoilState(userNameState);

  function loginDB() {
    axios
      .post('/member/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log('200', response.data);

        if (response.data.result.accessToken) {
          localStorage.setItem('accessToken', response.data.result.accessToken);
          localStorage.setItem(
            'refreshToken',
            response.data.result.refreshToken
          );

          // // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
          // axios.defaults.headers.common[
          //   'Authorization'
          // ] = `Bearer ${response.data.result.accessToken}`;
        }

        if (response.status === 200) {
          console.log('로그인 성공');
          setUserEmail(email);

          axios
            .get(`/member/profile/email/${email}`)
            .then((res) => {
              console.log('유저 정보 가져오기 성공');
              res.data.name && setUserName(res.data.name);
            })
            .catch((ex) => console.log('get user Info fail:' + ex));
        }

        Navigate('/homescreen');
        // setLogin(1);
      })
      .catch((ex) => {
        console.log('login requset fail:' + ex);
      })
      .catch((error) => console.log(error.response));
  }

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

  return (
    <form className={styles.form}>
      <input
        id="email"
        name="name"
        value={email}
        placeholder="이메일"
        className={styles.input}
        onChange={onChangeEmail}
      />
      <p className={styles.message}>{emailMessage}</p>

      <input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호 입력"
        className={styles.input}
        value={password}
        autoComplete="on"
        onChange={onChangePassword}
      />
      <p className={styles.message}>{passwordMessage}</p>
      <button
        type="button"
        onClick={loginDB}
        className={
          isEmail === false || isPassword === false
            ? `${styles.disbtn}`
            : `${styles.yesbtn}`
        }
        disabled={isEmail === false || isPassword === false}
      >
        로그인
      </button>
    </form>
  );
}
