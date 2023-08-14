import { React, useState } from 'react';
import styles from './PhoneForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function PhoneForm({ id, title }) {
  const [isPhone, setIsPhone] = useState(false);
  const [phoneMessage, setPhoneMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const onChangePhone = (e) => {
    const currentNumber = e.target.value;
    setPhone(currentNumber);
    const phoneRegExp = /^010-?([0-9]{4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentNumber)) {
      setPhoneMessage('올바른 형식이 아닙니다.');
      setIsPhone(false);
    } else {
      setPhoneMessage('');
      setIsPhone(true);
    }
  };

  const navigate = useNavigate();

  function gophone() {
    navigate('/joinskill', { state: { id: id, value: title } });
    console.log(id);
    console.log(phone);
    console.log(code);
    console.log(isPhone);
  }

  return (
    <div>
      <div className={styles.phoneform}>
        <p className={styles.phone}>휴대폰 번호를 입력해주세요.</p>
        <div className={styles.form}>
          <input
            id="phone"
            name="phone"
            value={phone}
            maxLength={11}
            placeholder="휴대폰번호 입력"
            className={styles.input1}
            onChange={onChangePhone}
          />
          <p className={styles.message}>{phoneMessage}</p>

          {/* <button
              type="submit"
              className={isPhone ? `${styles.yesbtn2}` : `${styles.disbtn2}`}
              onClick={gophone}
              disabled={isPhone === false}
            >
              인증
            </button>
          </div>
          <input
            id="code"
            name="code"
            value={code}
            placeholder="인증번호 입력"
            onChange={onChangePhone}
            className={styles.input2}
          /> */}
          <button
            type="submit"
            className={isPhone ? `${styles.yesbtn}` : `${styles.disbtn}`}
            onClick={gophone}
            disabled={isPhone === false}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
