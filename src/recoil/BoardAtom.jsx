import { atom } from 'recoil';
import { boardData } from '../model/BoardDummyData';

export const boardDataList = atom({
  key: 'boardDataList',
  default: boardData,
});
