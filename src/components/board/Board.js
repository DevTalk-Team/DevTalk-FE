import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Board.module.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardDataList } from '../../recoil/BoardAtom';
import { getBoardListAll } from '../../apis/services/boardServices';
import boardInstance from '../../apis/config/board_interceptor';

const Board = () => {
  const [searchText, setSearchText] = useState('');
  const [boardList, setBoardList] = useRecoilState(boardDataList);
  const navigate = useNavigate();
  // boardInstance();

  const getBoardList = async () => {
    // const data = await getBoardListAll(); // 비동기 함수의 결과를 기다립니다.
    const data = await getBoardListAll();
    setBoardList(data); // Recoil 상태를 업데이트합니다.
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="무료 상담 커뮤니티" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <select className={`${styles.tagButton} ${styles.subText}`}>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="writer">작성자</option>
            <option value="espresso">에스프레소</option>
          </select>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className={`${styles.button} ${styles.text}`}>글 작성</button>
        </div>
        {boardList.map((data) => {
          return (
            <div
              key={data.id}
              className={styles.content}
              onClick={() => navigate(`/board/detail/${data.id}`)}
            >
              <p className={styles.mainText}>{data.title}</p>
              <p className={styles.normalText}>{data.content}</p>
              <span className={styles.nameText}>{data.userName}</span>
              <span className={styles.category}> | </span>
              <span>comment: {data.commentCount}</span>
              <span className={styles.category}> | </span>
              <span>view: {data.views}</span>
              {/* <span className={styles.category}> | </span>
              {data.categories.map((category) => (
                <span className={styles.category}>#{category}</span>
              ))} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
