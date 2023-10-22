import React, { useState, useEffect } from 'react';
import styles from './SkillForm.module.css';

export default function SkillList({ skilllist, onUpdate, onDelete }) {
  const { skill } = skilllist;
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check === true) {
      onUpdate(skill);
    } else {
      onDelete(skill);
    }
  }, [check]);

  const handleChange = (e) => {
    setCheck(() => !check);
  };

  return (
    <div className={styles.grid}>
      <button
        onClick={handleChange}
        className={check === true ? `${styles.btn2}` : `${styles.btn}`}
      >
        {skill}
      </button>
    </div>
  );
}
