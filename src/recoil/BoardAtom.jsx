import { atom, selectorFamily } from 'recoil';

export const boardDataList = atom({
  key: 'boardDataList',
  default: [],
});

export const boardData = atom({
  key: 'boardData',
  default: {},
});

export const getBoardData = selectorFamily({
  key: 'getBoardData',
  get:
    (postId) =>
    ({ get }) => {
      const boardList = get(boardDataList);

      const foundPost = boardList.find((item) => item.postId === postId);

      return foundPost || [];
    },
});
