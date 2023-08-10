import React, { useState, useEffect } from 'react';
import styles from './AskForm.module.css';

export default function AskForm({ checkTxt }) {
  const [inputCount, setInputCount] = useState(0);
  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };
  useEffect(() => {
    if (inputCount > 0) {
      checkTxt(true);
    } else if (inputCount == 0) {
      checkTxt(false);
    } else {
      checkTxt(false);
    }
  }, [inputCount]);

  return (
    <div>
      <p className={styles.txt}>상담 내용</p>
      <div className={styles.ask}>
        <div className={styles.count}>
          <span>{inputCount}</span>
          <span>/1000 자</span>
        </div>
        <textarea
          className={styles.askta}
          onChange={onInputHandler}
          maxLength={999}
          placeholder="내용을 작성해주세요."
        ></textarea>
      </div>
      <p className={styles.txt}>첨부파일</p>
      <div className={styles.addfile}>
        <input type="file" multiple={true} id="fileUpload" />
      </div>
    </div>
  );
}
