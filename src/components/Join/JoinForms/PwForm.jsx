import { React, useState } from 'react';
import styles from './PwForm.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PwForm({ id, title }) {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const location = useLocation();
  const name = location.state.name;
  const email = location.state.email;

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

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage('확인되었습니다.');
      setIsPasswordConfirm(true);
    }
  };

  const navigate = useNavigate();

  function gophone() {
    navigate('/joinphone', {
      state: {
        id: id,
        value: title,
        name: name,
        email: email,
        password: password,
      },
    });
    console.log(id);
    console.log(password);
    console.log(isPasswordConfirm);
  }
  return (
    <>
      <div className={styles.pwform}>
        <p className={styles.pw}>
          로그인에 사용할 <br />
          비밀번호를 입력해 주세요.
        </p>
        <div className={styles.form}>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호 입력"
            className={styles.input}
            value={password}
            onChange={onChangePassword}
          />
          <p className={styles.message}>{passwordMessage}</p>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            className={styles.input}
            disabled={isPassword === false}
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
          <p className={styles.message}>{passwordConfirmMessage}</p>
          <button
            className={
              isPasswordConfirm ? `${styles.yesbtn}` : `${styles.disbtn}`
            }
            onClick={gophone}
            disabled={isPasswordConfirm === false}
          >
            다음
          </button>
        </div>
      </div>
    </>
  );
}
