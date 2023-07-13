import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const Navigate = useNavigate();

  function gohome() {
    Navigate('/homescreen');
  }
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(
        (data) => console.log(data)
        // alert(JSON.stringify(data)),
      )}
    >
      <input
        className={styles.input}
        id="email"
        type="email"
        placeholder="이메일"
        {...register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
      />
      <input
        className={styles.input}
        id="password"
        type="password"
        placeholder="비밀번호"
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          minLength: {
            value: 8,
            message: '8자리 이상 비밀번호를 사용하세요.',
          },
          maxLengthLength: {
            value: 20,
            message: '비밀번호는 20자리 이하입니다.',
          },
        })}
      />
      <button
        onClick={gohome}
        type="submit"
        className={styles.btn}
        disabled={isSubmitting}
      >
        로그인
      </button>
    </form>
  );
}
