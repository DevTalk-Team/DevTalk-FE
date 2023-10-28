import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './BoardDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineUser, AiOutlineEye } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import CommentList from './CommentList';
import { deletePost, getPost } from '../../apis/services/boardServices';
import { changeTimeFormat } from '../../utils/timeFormat';
import { boardData } from '../../recoil/BoardAtom';
import { useBoardAxios } from '../../apis/config/board_interceptor';
import { useRecoilValue } from 'recoil';
import { userNameState } from '../../recoil/userAtom';

// TODO: 현재 로그인 중인 id와 게시글의 userId를 비교해서 수정 삭제하는 기능 구현 필
const BoardDetail = () => {
  const [content, setContent] = useState(boardData);
  const userName = useRecoilValue(userNameState);
  const navigate = useNavigate();

  const { postId } = useParams();

  useBoardAxios();

  useEffect(() => {
    const getContent = async () => {
      const data = await getPost(postId);

      console.log(data);
      setContent(data); //
    };

    getContent();
  }, []);

  const onDownloadFile = (fileUrl) => {
    window.open(fileUrl);
  };

  const onUpdatePost = async () => {
    navigate(`/board/edit/${postId}`);
    alert('업데이트 기능');
  };

  const onDeletePost = async () => {
    const res = await deletePost(postId);

    if (res) navigate(`/board`);
    else alert('삭제에 실패했습니다.');
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.header}>
        <Header title="무료 상담 커뮤니티" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.borderLine}>
          <p className={styles.titleText}>{content.title}</p>
          <div className={styles.subTitleHeader}>
            <p className={`${styles.normalText} ${styles.subHeader}`}>
              <AiOutlineUser />
              {content.userName}
            </p>
            <p className={`${styles.normalText} ${styles.subHeader}`}>
              <BiTime />
              {changeTimeFormat(content.modifiedAt)}
            </p>
            <p className={`${styles.normalText} ${styles.subHeader}`}>
              <AiOutlineEye />
              view : {content.views}
            </p>
          </div>
        </div>
        {content.attachedFileResList &&
          content.attachedFileResList.length !== 0 && (
            <div className={styles.borderLine}>
              {console.log(content.attachedFileResList)}
              {content.attachedFileResList.map((file, index) => {
                return (
                  <button
                    key={`${file.originFileName}_${index}`}
                    type="button"
                    onClick={() => onDownloadFile(file.fileUrl)}
                  >
                    {file.originFileName}
                  </button>
                );
              })}
            </div>
          )}

        <div className={styles.contentBox}>
          <p className={`${styles.normalText}`}>{content.content}</p>
        </div>
        {userName === content.userName && (
          <div className={styles.buttonBox}>
            <button
              className={`${styles.button} ${styles.normalBoldText}`}
              type="button"
              onClick={onUpdatePost}
            >
              수정
            </button>
            <button
              className={`${styles.button} ${styles.normalBoldText}`}
              type="button"
              onClick={onDeletePost}
            >
              삭제
            </button>
          </div>
        )}
        <CommentList content={content} />
      </div>
    </div>
  );
};

export default BoardDetail;
