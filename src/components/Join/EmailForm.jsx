import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './EmailForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function EmailForm() {
  const navigate = useNavigate();
  function gopw() {
    navigate('/joinscreen');
  }
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.h3}>
          <p>
            로그인에 사용할 <br />
            이메일을 입력해 주세요.
          </p>
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(
            (data) => console.log(data)

            // alert(JSON.stringify(data)),)
          )}
        >
          <input
            className={styles.input}
            id="email"
            type="email"
            placeholder="  이메일 입력"
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          />
          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            다음
          </button>
        </form>
      </div>
    </div>
  );
}
