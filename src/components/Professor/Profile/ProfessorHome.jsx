import React from 'react';
import styles from './ProfessorHome.module.css';

const ProfessorHome = () => {
  return (
    <div className={styles.homeContent}>
      <div className={styles.profileName}>
        <p className={styles.mainText}>홍길동 개발자</p>
        <p className={styles.normalText}>상담 수 99+개</p>
      </div>
      <div className={styles.contentBox}>
        <p className={`${styles.mainText} ${styles.profileCategory}`}>Career</p>
        <p className={styles.subText}>
          현 스타트업 CTO
          <br />전 카카오 / 네이버 등.
        </p>
      </div>
      <div className={styles.contentBox}>
        <p className={`${styles.mainText} ${styles.profileCategory}`}>분야</p>
        <p className={styles.subText}>인공지능, 응용SW, ICT, 블록체인</p>
      </div>
      <div className={styles.contentBox}>
        <p className={`${styles.mainText} ${styles.profileCategory}`}>SKILL</p>
        <p className={styles.subText}>
          java/SpringBoot/MSA <br />
          Docker / Kubernetes / Devops <br />
          AWS / Kafka
        </p>
      </div>
      <div className={styles.contentBox}>
        <p className={`${styles.mainText} ${styles.profileCategory}`}>가격</p>
        <p className={styles.subText}>가격정보 3개 있음</p>
      </div>
    </div>
  );
};

export default ProfessorHome;
