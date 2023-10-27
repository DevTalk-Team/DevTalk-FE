import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Write.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  addPost,
  getPost,
  updatePost,
} from '../../apis/services/boardServices';
import { boardData } from '../../recoil/BoardAtom';
import { useBoardAxios } from '../../apis/config/board_interceptor';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [data, setData] = useRecoilState(boardData);

  const navigate = useNavigate();
  const { postId } = useParams();

  useBoardAxios();

  const getContent = async () => {
    const data = await getPost(postId);
    console.log(data);
    setData(() => data);
  };

  useEffect(() => {
    console.log(data.length);
    if (Object.keys(data).length === 0) {
      getContent();
    }
  }, []);

  // 데이터가 로드된 후에만 호출
  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onUpdatePost = async () => {
    const data = {
      title: title,
      content: content,
    };

    const res = await updatePost(postId, data);

    if (res) navigate(`/board/detail/${postId}`);
    else alert('등록에 실패했습니다.');
  };

  return (
    Object.keys(data).length !== 0 && (
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

          <button
            className={`${styles.button} ${styles.changeButton}`}
            onClick={onUpdatePost}
          >
            수정하기
          </button>
        </div>
      </div>
    )
  );
};

export default EditPost;
