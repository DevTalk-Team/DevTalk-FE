import React, { useState } from 'react';
import styles from './SkillForm.module.css';

export default function SkillList({ skilllist, onUpdate, onDelete, onSkill }) {
  const { id, skill } = skilllist;
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    setCheck(() => !check);
    if (check === false) {
      onUpdate({ id, skill });
    } else {
      onDelete(skilllist);
    }
    onSkill();
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
