import React from 'react';
import Header from '../../Header/Header';
import { FaStar } from 'react-icons/fa';
import styles from './ReviewFirst.module.css';

const ReviewFirst = ({ score, ARRAY, onUpdateScore }) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="리뷰쓰기(1/2)" />
      </div>
      <div className={styles.review}>
        <p className={styles.text}>
          홍길동님,
          <br /> 박용준님과의 상담은 어떠셨나요?
        </p>
        <div>
          {ARRAY.map((el, index) => (
            <FaStar
              key={index}
              onClick={() => onUpdateScore(index)}
              size="4rem"
              className={score[index] ? styles.active : styles.nonActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewFirst;
