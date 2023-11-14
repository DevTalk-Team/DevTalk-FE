import React, { useEffect } from 'react';
import styles from './CounselCard.module.css';
import { useNavigate } from 'react-router-dom';
import { createPaymentLink } from '../../../apis/services/paymentServices';
import { usePaymentAxios } from '../../../apis/config/payment_interceptors';

const CounselCard = ({ item }) => {
  const navigate = useNavigate();

  usePaymentAxios();

  const onNavigate = (id) => {
    navigate(`detail/${id}`);
  };

  const Button = ({ className, children, func }) => {
    return (
      <button
        className={`${styles.counselStatusButton} ${className}`}
        onClick={func}
      >
        {children}
      </button>
    );
  };

  const onPayment = async () => {
    const link = await createPaymentLink(1);
    window.open(link);
  };

  const changeStatus = () => {
    switch (item.status) {
      case 'ACCEPTED':
        return '승인 완료';
      case 'PAID':
        return '후기 작성';
      case 'CONSULTANT_CANCELED':
      case 'CONSULTER_CANCELED':
        return '취소됨';
      case 'CONSULTANT_REFUSED':
        return '거절됨';
      default:
        return '상담 대기중';
    }
  };

  const renderButtons = () => {
    console.log(item.status);
    switch (item.status) {
      case 'ACCEPTED':
        return (
          <>
            <Button func={onPayment}>결제</Button>
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
    <div className={styles.counselCard}>
      <div className={styles.cardHeader}>
        <p className={styles.title}>멘토 섭외 - 대면 상담</p>
        <p
          className={`${styles.title} ${
            item.status === '취소됨' || item.status === '거절됨'
              ? styles.cancelStatus
              : styles.status
          }`}
        >
          {changeStatus()}
        </p>
      </div>
      <p className={styles.content}>
        일정 {item.consultationDetails.reservationDate}
      </p>
      <p className={styles.content}>상담자 {item.consulterName}</p>
      <div className={styles.buttonBox}>{renderButtons()}</div>
    </div>
  );
};

export default CounselCard;
