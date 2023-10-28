import React, { useState } from 'react';
import styles from './BoardDetail.module.css';
import { BiTime } from 'react-icons/bi';
import { changeTimeFormat } from '../../utils/timeFormat';
import { useBoardAxios } from '../../apis/config/board_interceptor';
import {
  deleteComment,
  updateComment,
} from '../../apis/services/boardServices';
import { userNameState } from '../../recoil/userAtom';
import { useRecoilValue } from 'recoil';

const Comment = ({ comment, isSelected, setSelectedIndex }) => {
  const [content, setContent] = useState(comment.content);
  const userName = useRecoilValue(userNameState);

  useBoardAxios();

  const onUpdateComment = async () => {
    const data = {
      commentId: comment.postId,
      content: content,
    };

    const res = await updateComment(data);

    if (res === false) return alert('댓글 수정에 실패했습니다.');
    window.location.reload();
  };

  const onDeleteComment = async () => {
    const res = await deleteComment(comment.commentId);

    if (res === false) return alert('댓글 삭제에 실패했습니다.');
    window.location.reload();
  };

  const editComment = (
    <input
      value={content}
      onChange={(e) => setContent(e.target.value)}
      onKeyDown={(e) => (e.key === 'Enter' ? onUpdateComment() : null)}
    />
  );

  return (
    <div key={comment.postId} className={styles.commentBox}>
      <p className={styles.normalText}>{comment.userName}</p>
      <div>
        {isSelected ? (
          editComment
        ) : (
          <p className={styles.normalText}>{comment.content}</p>
        )}
        <div className={styles.editBox}>
          <p className={`${styles.normalText} ${styles.subHeader}`}>
            <BiTime />
            {changeTimeFormat(comment.modifiedAt)}
          </p>
          {userName === comment.userName && (
            <div>
              <button
                type="button"
                onClick={() =>
                  isSelected
                    ? onUpdateComment()
                    : setSelectedIndex(comment.commentId)
                }
              >
                수정
              </button>
              <button type="button" onClick={onDeleteComment}>
                삭제
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
