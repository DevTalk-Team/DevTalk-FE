import React, { useState } from 'react';
import styles from './TimeTable.module.css';
import Modal from 'react-modal';

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

const TimeTable = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timeState, setTimeState] = useState(times);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [checkState, setCheckState] = useState(0);

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

  const onChangeTimeState = () => {
    const updatedData = { ...timeState[selectedIdx], state: checkState };
    const updatedTimeState = [...timeState];
    updatedTimeState[selectedIdx] = updatedData;

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
      {timeState.map((data, index) => {
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
