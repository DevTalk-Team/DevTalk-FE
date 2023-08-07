import React, { useState } from 'react';
import styles from './AskForm.module.css';

export default function AskForm() {
  let [inputCount, setInputCount] = useState(0);
  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };
  return (
    <div>
      <p className={styles.txt}>상담 내용</p>
      <div className={styles.ask}>
        <p>
          <span>{inputCount}</span>
          <span>/1000 자</span>
        </p>
        <textarea
          onChange={onInputHandler}
          maxLength={999}
          cols="30"
          rows="10"
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
