import { React, useEffect, useState } from 'react';
import styles from './EmailForm.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EmailForm({ id, title }) {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmail, setIsEmail] = useState(false);

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
    <div>
      <div className={styles.emailform}>
        <p className={styles.email}>
          로그인에 사용할
          <br /> 이메일을 입력해주세요.
        </p>
        <div className={styles.form}>
          <input
            id="email"
            name="name"
            value={email}
            placeholder="이메일 입력"
            className={styles.input}
            onChange={onChangeEmail}
          />
          <p className={styles.message}>{emailMessage}</p>

          <button
            type="submit"
            className={isEmail ? `${styles.yesbtn}` : `${styles.disbtn}`}
            onClick={goemail}
            disabled={isEmail === false}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
