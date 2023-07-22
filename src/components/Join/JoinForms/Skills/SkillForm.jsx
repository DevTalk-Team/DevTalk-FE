import { React, useEffect, useState } from 'react';
import styles from './SkillForm.module.css';
import SkillList from './SkillList';
import { useNavigate } from 'react-router-dom';

export default function SkillForm({ id, title }) {
  const [skills, setSkills] = useState([
    {
      id: 0,
      skill: '웹',
    },
    {
      id: 1,
      skill: '서버',
    },
    {
      id: 2,
      skill: '디자인',
    },
    {
      id: 3,
      skill: '데브옵스',
    },
    {
      id: 4,
      skill: '클라우드',
    },
    {
      id: 5,
      skill: '핀테크',
    },
    {
      id: 6,
      skill: 'UX/UI',
    },
  ]);
  const [choose, setChoose] = useState([]);
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);
  const [skillConfirmMessage, setSkillConfirmMessage] = useState('');

  const onUpdate = (picked) => {
    setChoose([...choose, picked]);
    console.log(choose);
    console.log(choose.length);
  };
  const onDelete = (deleted) => {
    setChoose(choose.filter((t) => t.id !== deleted.id));
    console.log(choose);
    console.log(choose.length);
  };

  const onChangeSkillConfirm = (e) => {
    if (choose.length > 5) {
      setSkillConfirmMessage('최대 5개만 선택 가능합니다.');
      setIsSkillConfirm(false);
    } else if (choose.length < 1) {
      setIsSkillConfirm(false);
    } else {
      setSkillConfirmMessage('');
      setIsSkillConfirm(true);
    }
  };
  const navigate = useNavigate();

  function skill() {
    if (id == 1) {
      navigate('/jointerms', { state: { id: id, value: title } });
    } else {
      navigate('/joincomplete', { state: { id: id, value: title } });
    }
    console.log(choose);
    console.log(isSkillConfirm);
  }

  return (
    <div className={styles.container}>
      <div className={styles.skillform}>
        <p className={styles.skill}>
          {id == 0 ? '관심분야' : '전문분야'}를 선택해주세요. <br />
          (최대 5개)
        </p>
        <p className={styles.message}>{skillConfirmMessage}</p>
      </div>
      <div className={styles.listbox}>
        <button
          className={isSkillConfirm ? `${styles.yesbtn}` : `${styles.disbtn}`}
          onClick={skill}
          disabled={isSkillConfirm === false}
        >
          가입하기
        </button>
        <div className={styles.list}>
          {skills.map((item) => (
            <SkillList
              key={item.id}
              skilllist={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onSkill={onChangeSkillConfirm}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
