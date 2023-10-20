import { React, useEffect, useState } from 'react';
import styles from './EmailForm.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EmailForm({ id, title }) {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailOnly, setIsEmailOnly] = useState(false);

  const location = useLocation();
  const name = location.state.name;

  function goemail() {
    //이메일인증
    axios
      .get(`/member/signup/auth-code?email=${email}`)
      .then((response) => {
        console.log('200', response.data);

        if (response.status === 200) {
          console.log('이메일 인증번호 보내기 성공');
        }

        navigate('/joincheckemail', {
          state: { id: id, value: title, name: name, email: email },
        });
      })
      .catch((error) => console.log(error.response));
  }

  function check_duplication() {
    //이메일 중복 확인
    axios
      .get(`/member/signup/check-email?email=${email}`)
      .then((response) => {
        console.log('200', response.data);

        if (response.status === 200) {
          console.log('이메일 중복확인 성공');
        }

        setEmailMessage('사용 가능한 이메일입니다.');
        setIsEmailOnly(true);
      })
      .catch((error) => {
        console.log(error.response);
        setEmailMessage('이미 사용중인 이메일입니다.');
        setEmail('');
      });
  }

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail) && currentEmail.length > 0) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다.');
      setIsEmail(false);
    } else if (emailRegExp.test(currentEmail) && currentEmail.length > 0) {
      setEmailMessage('');
      setIsEmail(true);
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.emailform}>
        <p className={styles.email}>
          로그인에 사용할
          <br /> 이메일을 입력해주세요.
        </p>
        <div className={styles.form}>
          <div className={styles.checkform}>
            <input
              id="email"
              name="name"
              value={email}
              placeholder="이메일 입력"
              className={styles.input}
              onChange={onChangeEmail}
            />
            <button
              type="submit"
              onClick={check_duplication}
              className={
                isEmail ? `${styles.yescheckbtn}` : `${styles.discheckbtn}`
              }
            >
              중복 확인
            </button>
          </div>
          <p className={styles.message}>{emailMessage}</p>

          <button
            type="submit"
            className={isEmailOnly ? `${styles.yesbtn}` : `${styles.disbtn}`}
            onClick={goemail}
            disabled={isEmailOnly === false}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
