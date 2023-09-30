import { React, useState } from 'react';
import styles from './EmailForm.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EmailCheckForm({ id, title }) {
  const [code, setCode] = useState('');
  const [codeMessage, setCodeMessage] = useState('');
  const [isCode, setIsCode] = useState(false);
  const location = useLocation();
  const name = location.state.name;
  const email = location.state.email;

  const navigate = useNavigate();

  function gopw() {
    navigate('/joinpw', {
      state: { id: id, value: title, name: name, email: email },
    });
  }

  const onCheckCode = (e) => {
    //인증번호 일치여부 확인
    const currentCode = e.target.value;
    setCode(currentCode);
    if (currentCode !== '1234') {
      setCodeMessage('인증번호가 옳지 않습니다.');
      setIsCode(false);
    } else {
      setCodeMessage('인증되었습니다.');
      setIsCode(true);
    }
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
            className={isCode ? `${styles.yesbtn}` : `${styles.disbtn}`}
            onClick={gopw}
            disabled={isCode === false}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
