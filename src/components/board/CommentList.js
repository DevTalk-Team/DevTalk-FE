import React, { useState } from 'react';
import styles from './BoardDetail.module.css';
import { addComment } from '../../apis/services/boardServices';
import { useBoardAxios } from '../../apis/config/board_interceptor';
import Comment from './Comment';

const CommentList = ({ content }) => {
  const [comment, setComment] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useBoardAxios();

  const onAddComment = async () => {
    const data = {
      postId: content.postId,
      content: comment,
    };

    const res = await addComment(data);

    if (res === false) return alert('댓글 작성에 실패했습니다.');
    window.location.reload();
  };

  return (
    <div className={styles.commentListBox}>
      <p className={styles.normalText}>댓글 {content.commentCount}</p>
      <input
        className={styles.inputBox}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className={`${styles.button} ${styles.normalBoldText}`}
        type="submit"
        onClick={onAddComment}
      >
        등록
      </button>
      {console.log(selectedIndex === comment.commentId ? true : false)}
      {content.commentCount !== undefined &&
        content.commentCount !== 0 &&
        content.commentResList.map((comment) => {
          return (
            <Comment
              key={comment.commentId}
              comment={comment}
              isSelected={selectedIndex === comment.commentId ? true : false}
              setSelectedIndex={setSelectedIndex}
            />
          );
        })}
    </div>
  );
};

export default CommentList;
