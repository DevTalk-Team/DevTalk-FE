import React, { useEffect } from 'react';
import styles from './CounselCard.module.css';
import { useNavigate } from 'react-router-dom';
import { createPaymentLink } from '../../../apis/services/paymentServices';

const CounselCard = ({ item }) => {
  const navigate = useNavigate();

  const onNavigate = (id) => {
    navigate(`detail/${id}`);
  };

  const Button = ({ className, children }) => {
    return (
      <button className={`${styles.counselStatusButton} ${className}`}>
        {children}
      </button>
    );
  };

  const onPayment = async () => {
    const link = await createPaymentLink(1);
    window.open(link);
  };

  const renderButtons = () => {
    switch (item.status) {
      case 'ACCEPTED':
        return (
          <>
            <Button onClick={onPayment}>결제</Button>
            <Button className={styles.counselCancel}>상담 취소</Button>
          </>
        );
      case 'PAID':
        return <Button>후기 작성</Button>;
      case '후기 작성완료':
        return;
      case 'CONSULTANT_CANCELED':
      case 'CONSULTER_CANCELED':
        return <Button>취소 사유</Button>;
      case 'CONSULTANT_REFUSED':
        return <Button>거절 사유</Button>;
      default:
        return <Button>상담 취소</Button>;
    }
  };

  return (
    <div className={styles.counselCard} onClick={() => onNavigate(item.id)}>
      <div className={styles.cardHeader}>
        <p className={styles.title}>{item.title}</p>
        <p
          className={`${styles.title} ${
            item.status === '취소됨' || item.status === '거절됨'
              ? styles.cancelStatus
              : styles.status
          }`}
        >
          {item.status}
        </p>
      </div>
      <p className={styles.content}>일정 {item.date}</p>
      <p className={styles.content}>상담자 {item.counseler}</p>
      <div className={styles.buttonBox}>{renderButtons()}</div>
    </div>
  );
};

export default CounselCard;
