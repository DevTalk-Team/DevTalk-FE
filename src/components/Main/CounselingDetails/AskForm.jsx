import React, { useEffect, useState } from 'react';
import styles from './AskForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import {
  dateState,
  timeState,
  proceedState,
  consultantPickState,
  regionState,
  detailsState,
  detailsFile,
} from '../../recoil/MatchingAtom';
import { userNameState, userEmailState } from '../../../recoil/userAtom';
import { TiDelete } from 'react-icons/ti';
import { FiDownload } from 'react-icons/fi';

export default function AskForm({ checkTxt }) {
  //상담내용 및 파일 업로드 페이지
  const CounsulterName = useRecoilValue(userNameState);
  const CounselingDate = useRecoilValue(dateState);
  const CounselingTime = useRecoilValue(timeState);
  const CounselingType = useRecoilValue(proceedState);
  const CounselingCounsultant = useRecoilValue(consultantPickState);
  const CounselingRegion = useRecoilValue(regionState);

  const [content, setContent] = useRecoilState(detailsState);
  const [filebox, setFilebox] = useRecoilState(detailsFile);
  const [inputCount, setInputCount] = useState(0);
  const [files, setFiles] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    console.log('날짜', CounselingDate);
    console.log('시간', CounselingTime);
    console.log('진행법', CounselingType);
    console.log('전문가', CounselingCounsultant);
    console.log('지역', CounselingRegion);
  }, []);

  useEffect(() => {
    if (CounselingType === 1) {
      setType('F2F');
    } else {
      setType('NF2F');
    }
  }, []);

  const onInputHandler = (e) => {
    setContent(e.target.value);
    setInputCount(e.target.value.length);
  };

  const Navigate = useNavigate();

  //1000자이하
  useEffect(() => {
    if (inputCount > 0) {
      checkTxt(true);
    } else if (inputCount == 0) {
      checkTxt(false);
    } else {
      checkTxt(false);
    }
  }, [inputCount]);

  //파일추가
  const onUploadFile = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles !== undefined && selectedFiles.length > 3) {
      alert('첨부파일의 갯수는 3개를 넘을 수 없습니다!');
      return;
    }
    const updateData = { ...files, files: selectedFiles };

    setFiles(updateData);
  };

  //파일삭제
  const onDeleteFile = (index) => {
    const updateFiles = [...files.files];
    updateFiles.splice(index, 1);
    const updateData = { ...files, files: updateFiles };
    setFiles(updateData);
  };

  //예약하기를 누르면
  const onAddPost = async () => {
    const formData = new FormData();
    const reservationJson = {
      consultantId: CounselingCounsultant.id,
      consultantName: CounselingCounsultant.name,
      consulterName: CounsulterName,
      productId: CounselingTime.id,
      productProceedType: type,
      region: CounselingRegion,
      reservationDate: CounselingDate,
      reservationTime: CounselingTime.avtime,
      content: content,
      cost: CounselingCounsultant.cost,
    };

    formData.append('reservationJson', JSON.stringify(reservationJson));

    if (files.files && files.files.length > 0) {
      files.files.forEach((file, index) => {
        formData.append(`attachedFiles`, file);
      });
    }

    setFilebox(formData);
    Navigate('/matching_price');
  };

  return (
    <div>
      <p className={styles.txt}>상담 내용</p>
      <div className={styles.ask}>
        <p className={styles.count}>{inputCount}자/ 1000자</p>
        <textarea
          className={styles.askta}
          onChange={onInputHandler}
          maxLength={999}
          placeholder="내용을 작성해주세요."
        />
      </div>
      <p className={styles.filetxt}>
        첨부파일<span className={styles.txtspan}>(최대 3개)</span>
      </p>
      <div className={styles.addfile}>
        <label className={styles.inputlabel} htmlFor="fileInput">
          <FiDownload size={20} /> 참고자료 첨부
          <input
            id="fileInput"
            className={styles.input}
            accept="image/png"
            type="file"
            multiple
            onChange={onUploadFile}
          />
        </label>
      </div>
      <div>
        <p className={styles.filespan}>
          {files.files === undefined ? '0개' : files.files.length}
          /3개
        </p>
        <div className={styles.showfile}>
          {files.files &&
            files.files.map((file, index) => (
              <div className={styles.filelist} key={index}>
                <p className={styles.filename}>{file.name}</p>
                <button className={styles.deletebtn}>
                  <TiDelete
                    size={20}
                    className={styles.btn}
                    onClick={() => onDeleteFile(index)}
                  />
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.btnarea} onClick={onAddPost}>
        <button className={styles.donebtn} onClick={onAddPost}>
          예약하기
        </button>
      </div>
    </div>
  );
}
