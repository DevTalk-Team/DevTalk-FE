import React, { useEffect, useState } from 'react';
import styles from './TimeTable.module.css';
import Modal from 'react-modal';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../../../recoil/userAtom';
import { changeTimeFormatDay } from '../../../utils/timeFormat';
import {
  addProduct,
  updateProduct,
} from '../../../apis/services/productServices';
import { UNSAFE_RouteContext } from 'react-router-dom';

const times = [
  {
    time: '10:00',
    state: 0,
  },
  {
    time: '10:30',
    state: 0,
  },
  {
    time: '11:00',
    state: 0,
  },
  {
    time: '11:30',
    state: 0,
  },
  {
    time: '12:00',
    state: 0,
  },
  {
    time: '12:30',
    state: 0,
  },
  {
    time: '13:00',
    state: 0,
  },
  {
    time: '13:30',
    state: 0,
  },
  {
    time: '14:00',
    state: 0,
  },
  {
    time: '14:30',
    state: 0,
  },
  {
    time: '15:00',
    state: 0,
  },
  {
    time: '15:30',
    state: 0,
  },
  {
    time: '16:00',
    state: 0,
  },
  {
    time: '16:30',
    state: 0,
  },
  {
    time: '17:00',
    state: 0,
  },
  {
    time: '17:30',
    state: 0,
  },
  {
    time: '18:00',
    state: 0,
  },
  {
    time: '18:30',
    state: 0,
  },
  {
    time: '19:00',
    state: 0,
  },
  {
    time: '19:30',
    state: 0,
  },
];

const TimeTable = ({ selectedDate, product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timeState, setTimeState] = useState(times);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [checkState, setCheckState] = useState(0);

  const userId = useRecoilValue(userIdState);

  useEffect(() => {
    let updatedTimes = [...times];

    if (
      product.length !== 0 &&
      product[0].reservationDate === changeTimeFormatDay(selectedDate)
    ) {
      product.forEach((item) => {
        const reservationTime = item.reservationTime.substring(0, 5);
        const index = updatedTimes.findIndex(
          (time) => time.time === reservationTime
        );

        // 일치하는 항목이 있으면 state 업데이트
        if (index !== -1) {
          updatedTimes[index].state = item.productProceedType === 'F2F' ? 1 : 2;
        }
      });
    }

    setTimeState(updatedTimes);
  }, [selectedDate, product]);

  const onOpenModal = (idx) => {
    setSelectedIdx(idx);
    setModalIsOpen(true);
  };

  function onCloseModal() {
    setModalIsOpen(false);
  }

  const onChangeIdx = (idx) => {
    setCheckState(idx);
  };

  const onChangeTimeState = async () => {
    const updatedData = { ...timeState[selectedIdx], state: checkState };
    const updatedTimeState = [...timeState];
    updatedTimeState[selectedIdx] = updatedData;

    if (timeState[selectedIdx].state !== 0) {
      const data = {
        updateDate: changeTimeFormatDay(selectedDate),
        updateTime: timeState[selectedIdx].time + ':00',
        type: 'F2F',
      };

      const res = await updateProduct(data);

      if (!res) alert('수정에 실패했습니다');
    } else {
      const data = {
        consultantId: userId,
        reserveDate: changeTimeFormatDay(selectedDate),
        reserveTime: timeState[selectedIdx].time + ':00',
        productProceedType: checkState === '1' ? 'F2F' : 'NF2F',
      };

      const res = await addProduct(data);

      if (!res) alert('등록에 실패했습니다');
    }

    setTimeState(updatedTimeState);

    onCloseModal();
  };

  return (
    <div className={styles.tableBox}>
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        contentLabel="Example Modal"
        appElement={document.getElementById('root') || undefined}
      >
        <div className={styles.modalContent}>
          <div className={styles.btnBox}>
            <button
              className={`${styles.btn} ${styles.contact}  ${
                checkState === 1 ? styles.selected : ''
              }`}
              onClick={() => onChangeIdx(1)}
            >
              대면
            </button>
            <button
              className={`${styles.btn} ${styles.nonContact} ${
                checkState === 2 ? styles.selected : ''
              }`}
              onClick={() => onChangeIdx(2)}
            >
              비대면
            </button>
          </div>
          <button
            className={`${styles.btn} ${styles.insertBtn}`}
            onClick={onChangeTimeState}
          >
            설정완료
          </button>
        </div>
      </Modal>
      {timeState.length !== 0 &&
        timeState.map((data, index) => {
          return (
            <button
              key={index}
              className={`${styles.timeTableBox} ${
                data.state !== 0
                  ? data.state === 1
                    ? styles.contact
                    : styles.nonContact
                  : ''
              }`}
              onClick={() => onOpenModal(index)}
            >
              <p>{data.time}</p>
            </button>
          );
        })}
    </div>
  );
};

export default TimeTable;
