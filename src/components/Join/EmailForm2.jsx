import { React, useState } from 'react';

export default function EmailForm2() {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다!');
      setIsEmail(false);
    } else {
      setEmailMessage('사용 가능한 이메일 입니다.');
      setIsEmail(true);
    }
  };
  return (
    <div>
      <div className="form-el">
        <label htmlFor="email">Email</label> <br />
        <input id="email" name="name" value={email} onChange={onChangeEmail} />
        <p className="message">{emailMessage}</p>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}
