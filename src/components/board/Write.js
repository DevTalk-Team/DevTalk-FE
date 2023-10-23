import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Write.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardDataList } from '../../recoil/BoardAtom';
import { useBoardAxios } from '../../apis/config/board_interceptor';
import { addPost } from '../../apis/services/boardServices';

const Write = () => {
  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
  const { postId } = useParams();
  useBoardAxios();

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
    const updateData = { ...files, files: selectedFiles };

    setFiles(updateData);
  };

  const onDeleteFile = (index) => {
    const updateFiles = [...files.files];
    updateFiles.splice(index, 1);
    const updateData = { ...files, files: updateFiles };
    setFiles(updateData);
  };

  const onAddPost = async () => {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('content', content);

    if (files.files && files.files.length > 0) {
      files.files.forEach((file, index) => {
        formData.append(`files`, file);
      });
    }

    console.log(formData.getAll('title'));
    console.log(formData.getAll('content'));
    console.log(formData.getAll('files'));
    const res = await addPost(formData);

    if (res) navigate('/board');
    else alert('등록에 실패했습니다.');
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="무료 상담 커뮤니티" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.titleHeader}>
          <input
            id="title"
            placeholder="제목을 입력해주세요."
            className={`${styles.title} ${styles.normalText} ${styles.contentBox}`}
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <p className={styles.normalText}>{content.length}자/최대 1000자</p>
        <textarea
          placeholder="상담 받을 내용을 작성해 주세요."
          className={`${styles.content} ${styles.normalText} ${styles.contentBox}`}
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
              첨부 {files.files === undefined ? '0개' : files.files.length}
              /3개
            </p>
            <div className={`${styles.contentBox} ${styles.insertBox}`}>
              {files.files &&
                files.files.map((file, index) => (
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
          onClick={onAddPost}
        >
          등록하기
        </button>
      </div>
    </div>
  );
};

export default Write;
