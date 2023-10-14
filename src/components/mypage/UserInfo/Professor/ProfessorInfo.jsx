import React, { useState } from 'react';
import styles from './ProfessorInfo.module.css';
import Header from '../../../Header/Header';
import { useNavigate } from 'react-router-dom';

const ProfessorInfo = () => {
  const [intro, setIntro] = useState('');
  const [carrer, setCarrer] = useState('');
  const [field, setField] = useState('');
  const [skill, setSkill] = useState('');

  const navigate = useNavigate();

  const changeData = () => {
    navigate('/homescreen');
  };

  const changeCounselType = () => {
    navigate('/professor/category');
  };

  const changeCounselField = () => {
    navigate('/professor/field');
  };

  const changeLocation = () => {
    navigate('/professor/location');
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="전문가 정보" />
      </div>
      <div className={styles.infoBox}>
        <div>
          <p className={styles.mainText}>자기 소개 작성</p>
          <textarea
            id={styles.counselContent}
            className={`${styles.normalText} ${styles.contentBox}`}
            placeholder={`자기 소개를 작성하세요. ${'\n'}예) 백엔드 / 서버 10년차`}
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
        </div>
        <div>
          <p className={styles.mainText}>커리어</p>
          <textarea
            id={styles.counselContent}
            className={`${styles.normalText} ${styles.contentBox}`}
            placeholder={`커리어를 작성하세요. ${'\n'}예) 현 스타트업 CTO`}
            value={carrer}
            onChange={(e) => setCarrer(e.target.value)}
          />
        </div>
        <div>
          <p className={styles.mainText}>분야</p>
          <textarea
            id={styles.counselContent}
            className={`${styles.normalText} ${styles.contentBox}`}
            placeholder={`분야를 작성하세요. ${'\n'}예) 인공지능, 응용SW`}
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </div>
        <div>
          <p className={styles.mainText}>스킬</p>
          <textarea
            id={styles.counselContent}
            className={`${styles.normalText} ${styles.contentBox}`}
            placeholder={`상담 가능한 스킬에 대해 알려주세요. ${'\n'}예) java/SpringBoot/MSA`}
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </div>
        <p className={styles.mainText}>가격 책정</p>
        <div className={styles.priceContent}>
          <p className={styles.subText}>30분 대면 상담</p>
          <input
            className={`${styles.priceInput} ${styles.normalText} `}
            placeholder="10,000원"
          />
        </div>
        <div className={styles.priceContent}>
          <p className={styles.subText}>30분 비대면 상담</p>
          <input
            className={`${styles.priceInput} ${styles.normalText} `}
            placeholder="10,000원"
          />
        </div>
        <div className={styles.changeDataContent}>
          <p className={styles.mainText}>상담 가능 분야 카테고리</p>
          <button
            className={`${styles.button} ${styles.subText}`}
            onClick={changeCounselType}
          >
            수정하기
          </button>
        </div>
        <div className={styles.changeDataContent}>
          <p className={styles.mainText}>상담 가능 분야 기술</p>

          <button
            className={`${styles.button} ${styles.subText}`}
            onClick={changeCounselField}
          >
            수정하기
          </button>
        </div>
        <div className={styles.changeDataContent}>
          <p className={styles.mainText}>대면 상담 가능 지역 설정</p>
          <button
            className={`${styles.button} ${styles.subText}`}
            onClick={changeLocation}
          >
            수정하기
          </button>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <button
          className={`${styles.button} ${styles.subText}`}
          onClick={changeData}
        >
          수정
        </button>
        <button
          className={`${styles.button} ${styles.subText} ${styles.cancel}`}
          onClick={changeData}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default ProfessorInfo;
