import { atom } from 'recoil';

export const pageIndexState = atom({
  key: 'pageIndexState',
  default: 1,
});

export const counselListState = atom({
  key: 'counselListState',
  default: [],
});
