import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Write.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardDataList } from '../../recoil/BoardAtom';

const Write = () => {
  const [title, setTitle] = useState('');
  const [boardData, setBoardData] = useRecoilState(boardDataList);

  const [content, setContent] = useState('');
  const [editData, setEditData] = useState([]);

  const navigate = useNavigate();
  const { postId } = useParams();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onUploadFile = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles !== undefined && selectedFiles.length > 3) {
      alert('첨부파일의 갯수는 3개를 넘을 수 없습니다!');
      return;
    }
    const updateData = { ...editData, files: `selectedFiles` };
    setEditData(updateData);
  };

  const onDeleteFile = (index) => {
    const updateFiles = [...editData.files];
    updateFiles.splice(index, 1);
    const updateData = { ...editData, files: updateFiles };
    setEditData(updateData);
  };

  const onUpdateContent = () => {
    setBoardData(...boardData, editData);
    navigate('/board');
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="무료 상담 커뮤니티" />
      </div>
      <div className={styles.reviewContent}>
        <input
          id="title"
          className={styles.title}
          value={title}
          onChange={onChangeTitle}
        />
      </div>
      <label className={`${styles.insertButton}`} htmlFor="fileInput">
        사진 첨부하기
      </label>
      <p className={styles.normalText}>{content.length}자/최대 1000자</p>
      <textarea
        placeholder="상담 받을 내용을 작성해 주세요."
        className={styles.content}
        value={content}
        onChange={onChangeContent}
      />
      <div className={styles.contentGroup}>
        <p className={styles.mainText}>첨부파일</p>
        <label
          className={`${styles.button} ${styles.insertButton}`}
          htmlFor="fileInput"
        >
          파일 첨부
          <input
            id="fileInput"
            className={styles.fileInput}
            type="file"
            multiple
            onChange={onUploadFile}
          />
        </label>
        <div className={styles.contentGroup}>
          <p className={styles.normalBoldText}>
            첨부 {editData.files === undefined ? '0개' : editData.files.length}
            /3개
          </p>
          <div className={styles.contentBox}>
            {editData.files &&
              editData.files.map((file, index) => (
                <div className={styles.fileList} key={index}>
                  <button onClick={() => onDeleteFile(index)}>x</button>{' '}
                  <p className={styles.normalBoldText}>{file.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <button
        className={`${styles.button} ${styles.changeButton}`}
        onClick={onUpdateContent}
      >
        상담 내용 수정
      </button>
    </div>
  );
};

export default Write;
