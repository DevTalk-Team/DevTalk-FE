import React, { useState, useEffect } from 'react';
import styles from './AskForm.module.css';
import { useRecoilState } from 'recoil';
import { detailsState, detailsFile } from '../../recoil/MatchingAtom';
import { TiDelete } from 'react-icons/ti';
import { FiDownload } from 'react-icons/fi';
import axios from 'axios';

export default function AskForm({ checkTxt }) {
  //상담내용 및 파일 업로드 페이지

  const [content, setContent] = useRecoilState(detailsState);
  const [inputCount, setInputCount] = useState(0);
  // const [fileCount, setFileCount] = useState(0);
  const [files, setFiles] = useRecoilState(detailsFile);
  const onInputHandler = (e) => {
    setContent(e.target.value);
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

  // 파일 업로드
  const onUploadFile = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + files.length > 3) {
      alert('첨부파일의 개수는 최대 3개까지만 가능합니다!');
      return;
    }

    // Recoil 상태에 파일 추가
    const updatedFiles = [
      ...files,
      ...selectedFiles.slice(0, 3 - files.length),
    ];
    setFiles(updatedFiles);
    console.log(files);
  };

  const onDeleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
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
        // action="/uploadfiles"
        method="post"
        enctype="multipart/form-data"
        className={styles.addfile}
      >
        <label className={styles.inputlabel} htmlFor="fileInput">
          <FiDownload size={20} /> 참고자료 첨부
        </label>
        <input
          id="fileInput"
          type="file"
          multiple={true}
          onChange={onUploadFile}
          className={styles.input}
        />
      </form>
      <div className={styles.showfile}>
        {files &&
          files.map((item, i) => (
            <div className={styles.filelist} key={i}>
              <p className={styles.filename}>{item.name}</p>
              <button className={styles.deletebtn}>
                <TiDelete
                  size={20}
                  className={styles.btn}
                  onClick={() => onDeleteFile(i)}
                />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
