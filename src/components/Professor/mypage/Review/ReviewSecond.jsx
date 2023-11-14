import React, { useState } from 'react';
import Header from '../../Header/Header';
import styles from './ReviewSecond.module.css';
import { FaStar } from 'react-icons/fa';

const ReviewSecond = ({ score, ARRAY, onUpdateScore }) => {
  const [textData, setTextData] = useState('');
  const [fileList, setFileList] = useState([]);

  const onChangeContent = (e) => {
    setTextData(e.target.value);
  };

  const onUploadFile = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles !== undefined && selectedFiles.length > 3) {
      alert('첨부파일의 갯수는 3개를 넘을 수 없습니다!');
      return;
    }
    const updateData = [selectedFiles];
    setFileList(updateData);
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="리뷰쓰기(2/2)" />
      </div>
      <div className={styles.reviewContent}>
        <p className={styles.text}>박용준전문가</p>
        <div>
          {ARRAY.map((el, index) => (
            <FaStar
              key={index}
              onClick={() => onUpdateScore(index)}
              size="2.5rem"
              className={score[index] ? styles.active : styles.nonActive}
            />
          ))}
        </div>
        <label className={`${styles.insertButton}`} htmlFor="fileInput">
          사진 첨부하기
          <input
            id="fileInput"
            className={styles.fileInput}
            type="file"
            multiple
            onChange={onUploadFile}
          />
        </label>
        <textarea
          placeholder="상담이 어땠는지 솔직한 리뷰를 작성해 주세요.(선택)"
          id={styles.counselContent}
          className={`${styles.normalText} ${styles.contentBox}`}
          value={textData}
          onChange={onChangeContent}
        />
        <button className={`${styles.button} ${styles.changeButton}`}>
          완료
        </button>
      </div>
    </div>
  );
};

export default ReviewSecond;
