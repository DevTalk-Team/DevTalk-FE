import { React, useState } from 'react';
import styles from './NameForm.module.css';

export default function NameForm() {
  const [nameMessage, setNameMessage] = useState('');
  const [name, setName] = useState('');
  const [isname, setIsName] = useState(false);

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 1) {
      setNameMessage('한글자 이상 입력해주세요');
      setIsName(false);
    } else {
      setNameMessage('');
      setIsName(true);
    }
  };

  return (
    <div>
      <div className={styles.nameform}>
        <p className={styles.name}>이름을 입력해주세요.</p>
        <div className={styles.form}>
          <input
            id="name"
            name="name"
            value={name}
            className={styles.input}
            placeholder="이름 ( 한글자 이상 )"
            onChange={onChangeName}
          />
          <p className={styles.message}>{nameMessage}</p>
          <button
            className={isname ? `${styles.yesbtn}` : `${styles.disbtn}`}
            onClick={name}
            disabled={isname === false}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
