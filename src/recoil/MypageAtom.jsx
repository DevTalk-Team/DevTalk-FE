import { atom } from 'recoil';

export const pageIndexState = atom({
  key: 'pageIndexState',
  default: 1,
});

export const professorPageIndexState = atom({
  key: 'professorPageIndexState',
  default: 1,
});

export const counselListState = atom({
  key: 'counselListState',
  default: [],
});

export const professorCounselListState = atom({
  key: 'professorCounselListState',
  default: [],
});
