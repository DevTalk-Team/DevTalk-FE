import React, { useRef, useState } from 'react';
import styles from './PhotoForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function PhotoForm({ id, title }) {
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
    console.log(reader.result);
  };

  const navigate = useNavigate();

  function goname() {
    navigate('/joinname', { state: { id: id, value: title } });
  }
  return (
    <div className={styles.form}>
      <p className={styles.text}>
        사용 할 <br />
        프로필 사진을 등록해주세요.
      </p>
      <div className={styles.photoform}>
        <img
          className={styles.photo}
          src={imgFile ? imgFile : './user.png'}
          alt="프로필 이미지"
        />
        <form>
          <label className={styles.inputlabel} htmlFor="profileImg">
            사진 가져오기
          </label>
          <input
            className={styles.input}
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
          />
        </form>
        <button onClick={goname} className={styles.btn}>
          다음
        </button>
      </div>
    </div>
  );
}
