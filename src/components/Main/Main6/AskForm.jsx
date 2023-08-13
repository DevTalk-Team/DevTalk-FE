import React, { useState, useEffect } from 'react';
import styles from './AskForm.module.css';
import { TiDelete } from 'react-icons/ti';
import { FiDownload } from 'react-icons/fi';

export default function AskForm({ checkTxt }) {
  //상담내용 및 파일 업로드 페이지

  const [inputCount, setInputCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [files, setFiles] = useState([]);
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

  const handleFileChange = (e) => {
    const fileData = e.target.files && e.target.files[0].name;
    setFiles([...files, fileData]);
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

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
      <p className={styles.txt}>
        첨부파일<span className={styles.txtspan}>(최대 3개)</span>
      </p>
      <form
        action="/uploadfiles"
        method="post"
        enctype="multipart/form-data"
        className={styles.addfile}
      >
        <label className={styles.inputlabel} htmlFor="file">
          <FiDownload size={20} /> 참고자료 첨부
        </label>
        <input
          id="file"
          type="file"
          multiple={true}
          onChange={handleFileChange}
          className={styles.input}
        />
      </form>
      <div className={styles.showfile}>
        {files.map((item, i) => (
          <div className={styles.filelist}>
            <p className={styles.filename}>{item}</p>
            <button className={styles.deletebtn}>
              <TiDelete size={20} className={styles.btn} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
