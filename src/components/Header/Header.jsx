import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({ title }) {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <div>
      <header className={styles.header}>
        <button className={styles.backicon} onClick={goback}>
          <IoIosArrowBack size={35} />
        </button>
        <div className={styles.titleplace}>
          <p className={styles.title}>{title}</p>
        </div>
      </header>
    </div>
  );
}
