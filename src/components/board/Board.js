import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Board.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardDataList } from '../../recoil/BoardAtom';
import { getAllPost, searchPost } from '../../apis/services/boardServices';

const Board = () => {
  const [searchText, setSearchText] = useState('');
  const [searchOption, setSearchOption] = useState('all');
  const [boardList, setBoardList] = useRecoilState(boardDataList);
  const navigate = useNavigate();

  const getBoardList = async () => {
    const data = await getAllPost();
    setBoardList(data); // Recoil 상태를 업데이트합니다.
  };

  useEffect(() => {
    getBoardList();
  }, []);

  const classifyData = () => {
    if (searchOption === 'all')
      return { title: searchText, content: searchText };
    else if (searchOption === 'title') return { title: searchText };
    return { content: searchText };
  };

  const onSearchPost = async () => {
    const keywords = classifyData();

    const res = await searchPost(keywords);
    console.log(res);
    setBoardList(res);
  };

  const onChangePage = () => {
    navigate('write');
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="무료 상담 커뮤니티" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <select
            className={`${styles.tagButton} ${styles.subText}`}
            value={searchOption}
            onChange={(e) => setSearchOption(e.target.value)}
          >
            <option value="all">제목+내용</option>
            <option value="title">제목</option>
            <option value="content">내용</option>
          </select>
          <input
            className={styles.searchBox}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? onSearchPost() : null)}
          />
          <button
            className={`${styles.button} ${styles.subText}`}
            onClick={onChangePage}
          >
            글 작성
          </button>
        </div>
        {boardList.map((data) => {
          return (
            <div
              key={data.postId}
              className={styles.content}
              onClick={() => navigate(`/board/detail/${data.postId}`)}
            >
              <p className={styles.mainText}>{data.title}</p>
              <p className={styles.normalText}>{data.content}</p>
              <span className={styles.nameText}>{data.userName}</span>
              <span className={styles.category}> | </span>
              <span>comment: {data.commentCount}</span>
              <span className={styles.category}> | </span>
              <span>view: {data.views}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
