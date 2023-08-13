import React, { useEffect, useState } from 'react';
import styles from './SkillForm.module.css';

export default function SkillList({ skilllist, onUpdate, onDelete, onSkill }) {
  const { id, skill } = skilllist;
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check === true) {
      console.log('1234');
      onUpdate({ id, skill });
    } else {
      onDelete(skilllist);
    }
    // onSkill();
  }, [check]);

  const handleChange = (e) => {
    console.log(check);
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
