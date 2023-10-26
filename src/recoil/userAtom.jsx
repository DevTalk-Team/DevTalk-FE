import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'userData',
  storage: sessionStorage,
});

export const userEmailState = atom({
  key: 'userEmailState',
  default: '', // 초기값은 빈 문자열
  effects_UNSTABLE: [persistAtom],
});

export const userNameState = atom({
  key: 'userNameState',
  default: '', // 초기값은 빈 문자열
  effects_UNSTABLE: [persistAtom],
});
