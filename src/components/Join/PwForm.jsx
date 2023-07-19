import { React, useState } from 'react';

export default function PwForm() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호 입니다.');
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage('떼잉~ 비밀번호가 똑같지 않아요!');
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage('똑같은 비밀번호를 입력했습니다.');
      setIsPasswordConfirm(true);
    }
  };
  return (
    <div>
      <div className="form-el">
        <label htmlFor="password">Password</label> <br />
        <input
          id="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
        <p className="message">{passwordMessage}</p>
      </div>
      <div className="form-el">
        <label htmlFor="passwordConfirm">Password Confirm</label> <br />
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
        <p className="message">{passwordConfirmMessage}</p>
      </div>
    </div>
  );
}
