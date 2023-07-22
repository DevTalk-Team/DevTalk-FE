import { React, useState } from 'react';
import styles from './NameForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function NameForm({ id, title }) {
  const [nameMessage, setNameMessage] = useState('');
  const [name, setName] = useState('');
  const [isname, setIsName] = useState(false);

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 7) {
      setNameMessage('두글자 이상 입력해주세요');
      setIsName(false);
    } else {
      setNameMessage('');
      setIsName(true);
    }
  };

  const navigate = useNavigate();

  function goname() {
    navigate('/joinemail', { state: { id: id, value: title } });
    console.log(id);
    console.log(name);
    console.log(isname);
  }

  return (
    <div>
      <div className={styles.nameform}>
        <p className={styles.name}>이름을 입력해주세요.</p>
        <div className={styles.form}>
          <input
            id="name"
            name="name"
            value={name}
            maxLength={7}
            className={styles.input}
            placeholder="실명을 입력해주세요."
            onChange={onChangeName}
          />
          <p className={styles.message}>{nameMessage}</p>
          <button
            className={isname ? `${styles.yesbtn}` : `${styles.disbtn}`}
            onClick={goname}
            disabled={isname === false}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
