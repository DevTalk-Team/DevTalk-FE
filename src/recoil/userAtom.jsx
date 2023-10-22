// recoilState.js
import { atom } from 'recoil';

export const userEmailState = atom({
  key: 'userEmailState',
  default: 'mentee@gmail.com', // 초기값은 빈 문자열
});
