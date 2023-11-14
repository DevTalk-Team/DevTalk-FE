import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from './ProfessorCounselDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { professorCounselListState } from '../../../../recoil/MypageAtom';

const ProfessorCounselDetail = () => {
  const { id } = useParams();
  const [counselDetailData, setCounselDetailData] = useRecoilState(
    professorCounselListState
  );
  const [editData, setEditData] = useState(counselDetailData[id - 1]);
  const navigate = useNavigate();

  useEffect(() => {
    setEditData(counselDetailData[id - 1]);
  }, [counselDetailData, id]);

  const onChangeContent = (e) => {
    const updateData = { ...editData, content: e.target.value };
    setEditData(updateData);
  };

  const onUploadFile = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles !== undefined && selectedFiles.length > 3) {
      alert('첨부파일의 갯수는 3개를 넘을 수 없습니다!');
      return;
    }
    const updateData = { ...editData, files: selectedFiles };
    setEditData(updateData);
  };

  const onDeleteFile = (index) => {
    const updateFiles = [...editData.files];
    updateFiles.splice(index, 1);
    const updateData = { ...editData, files: updateFiles };
    setEditData(updateData);
  };

  const onUpdateContent = () => {
    const updateCounselData = [...counselDetailData];
    updateCounselData[id - 1] = editData;
    setCounselDetailData(updateCounselData);
    navigate('/counsel');
  };

  return (
    <div className={styles.counselDetail}>
      <div className={styles.contentGroup}>
        <p className={styles.mainText}>상담 카테고리</p>
        <p className={styles.subText}>{editData.title}</p>
      </div>

      <div className={styles.contentGroup}>
        <p className={styles.mainText}>일정</p>
        <p className={styles.subText}>{editData.date}</p>
      </div>

      <div className={styles.contentGroup}>
        <p className={styles.mainText}>전문가</p>
        <p className={styles.subText}>{editData.counseler}</p>
      </div>

      <div className={styles.contentGroup}>
        <div className={styles.contentHeader}>
          <p className={styles.mainText}>상담내용</p>
          <p className={styles.normalText}>
            {editData.content.length}자/최대 1000자
          </p>
        </div>
        <textarea
          id={styles.counselContent}
          className={`${styles.normalText} ${styles.contentBox}`}
          value={editData.content}
          onChange={onChangeContent}
        />
      </div>

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

export default ProfessorCounselDetail;
