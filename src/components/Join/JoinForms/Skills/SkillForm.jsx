import { React, useEffect, useState } from 'react';
import styles from './SkillForm.module.css';
import SkillList from './SkillList';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SkillForm({ id, title }) {
  const skills = useState([
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

  function postinfo() {
    //멘티 회원가입
    console.log('실행중', id);
    console.log(name, email, password, phone);
    axios
      .post(`${process.env.REACT_APP_API_URL}/member/signup/consulter`, {
        name: name,
        email: email,
        password: password,
        checkPassword: password,
        phoneNumber: phone,
        category: choose,
      })
      .then((response) => {
        console.log('201', response.data);

        if (response.status === 201) {
          console.log('회원가입 완료');
        }
      })
      .catch((error) => console.log(error.response));
  }
  const [choose, setChoose] = useState([]);
  const [isSkillConfirm, setIsSkillConfirm] = useState(false);
  const [skillConfirmMessage, setSkillConfirmMessage] = useState('');

  const location = useLocation();
  const name = location.state.name;
  const email = location.state.email;
  const password = location.state.password;
  const phone = location.state.phone;

  const onUpdate = (picked) => {
    setChoose([...choose, picked]);
  };
  const onDelete = (deleted) => {
    setChoose(choose.filter((t) => t !== deleted));
  };

  useEffect(() => {
    if (choose.length > 5) {
      setSkillConfirmMessage('최대 5개만 선택 가능합니다.');
      setIsSkillConfirm(false);
      console.log(choose);
    } else if (choose.length < 1) {
      setIsSkillConfirm(false);
      console.log(choose);
    } else {
      setSkillConfirmMessage('');
      setIsSkillConfirm(true);
      console.log(choose);
    }
  }, [choose]);

  const navigate = useNavigate();

  function skill() {
    if (id === 1) {
      navigate('/jointerms', {
        state: {
          id: id,
          value: title,
          name: name,
          email: email,
          password: password,
          phone: phone,
          choose: choose,
        },
      });
    } else {
      navigate('/joincomplete', {
        state: {
          name: name,
        },
      });
      postinfo();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.skillform}>
        <p className={styles.skill}>
          {id === 0 ? '관심분야' : '전문분야'}를 선택해주세요. <br />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
