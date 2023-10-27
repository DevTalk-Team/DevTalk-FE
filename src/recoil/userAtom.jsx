import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'userData',
  storage: sessionStorage,
});

// 사용자 email 정보 atom
export const userEmailState = atom({
  key: 'userEmailState',
  default: '', // 초기값은 빈 문자열
  effects_UNSTABLE: [persistAtom],
});

// 사용자 이름 정보 atom
export const userNameState = atom({
  key: 'userNameState',
  default: '', // 초기값은 빈 문자열
  effects_UNSTABLE: [persistAtom],
});

// 사용자 Id 정보 atom
export const userIdState = atom({
  key: 'userIdState',
  default: '', // 초기값은 빈 문자열
  effects_UNSTABLE: [persistAtom],
});
