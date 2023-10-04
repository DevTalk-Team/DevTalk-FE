import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Board.module.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { boardDataList } from '../../recoil/BoardAtom';

const Board = () => {
  const [searchText, setSearchText] = useState('');
  const datas = useRecoilValue(boardDataList);

  const navigate = useNavigate();

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
        {datas.map((data) => {
          return (
            <div
              key={data.id}
              className={styles.content}
              onClick={() => navigate(`/board/detail/${data.id}`)}
            >
              <p className={styles.mainText}>{data.title}</p>
              <p className={styles.normalText}>{data.content}</p>
              <span className={styles.nameText}>{data.user}</span>
              <span className={styles.category}> | </span>
              {data.categories.map((category) => (
                <span className={styles.category}>#{category}</span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
