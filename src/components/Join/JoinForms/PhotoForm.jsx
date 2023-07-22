import React from 'react';
import styles from './PhotoForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function PhotoForm({ id, title }) {
  const navigate = useNavigate();

  function gophoto() {
    navigate('/joinname', { state: { id: id, value: title } });
  }
  return (
    <div>
      <p>전문가 이미지 업로드</p>
      <button onClick={gophoto}>다음</button>
    </div>
  );
}
