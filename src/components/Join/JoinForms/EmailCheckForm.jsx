import { React, useEffect, useState } from 'react';
import styles from './EmailForm.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EmailCheckForm({ id, title }) {
  const [code, setCode] = useState('');
  const [codeMessage, setCodeMessage] = useState('');
  const [isCode, setIsCode] = useState(false);
  const location = useLocation();
  const name = location.state.name;
  const email = location.state.email;

  const navigate = useNavigate();

  function gopw() {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/member/signup/auth-code?email=${email}&authCode=${code}`
      )
      .then((response) => {
        console.log('200', response.data);

        if (response.status === 200) {
          console.log('회원가입 이메일 인증 성공');
        }

        navigate('/joinpw', {
          state: { id: id, value: title, name: name, email: email },
        });
      })
      .catch((error) => {
        console.log(error.response);
        setCodeMessage('인증번호가 옳지 않습니다.');
      });
  }

  const onCheckCode = (e) => {
    //인증번호 일치여부 확인
    const currentCode = e.target.value;
    setCode(currentCode);
  };

  return (
    <div>
      <div className={styles.emailform}>
        <p className={styles.email}>
          이메일로 받은
          <br /> 인증번호를 입력해주세요.
        </p>
        <div className={styles.form}>
          <input
            id="code"
            name="code"
            value={code}
            placeholder="인증번호 입력"
            className={styles.input}
            onChange={onCheckCode}
          />
          <p className={styles.message}>{codeMessage}</p>

          <button
            type="submit"
            // className={isCode ? `${styles.yesbtn}` : `${styles.disbtn}`}
            onClick={gopw}
            className={styles.yesbtn}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
