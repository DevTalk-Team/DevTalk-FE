import { atom } from 'recoil';
import uuid from 'react-uuid';

//상담 진행 방식
export const proceedState = atom({
  key: `proceedState/${uuid()}`,
  default: 0,
});

//기술스택
export const techState = atom({
  key: `techState/${uuid()}`,
  default: '',
});

//상담지역(대면)
export const regionState = atom({
  key: `regionState/${uuid()}`,
  default: '',
});

//상담 분야
export const fieldState = atom({
  key: `fieldState/${uuid()}`,
  default: '',
});

//전문가 선택
export const consultantPickState = atom({
  key: `consultantPickState/${uuid()}`,
  default: {},
});

//날짜정보
export const dateState = atom({
  key: `dateState/${uuid()}`,
  default: {},
});

//시간 정보
export const timeState = atom({
  key: `timeState/${uuid()}`,
  default: {},
});

//상담내용
export const detailsState = atom({
  key: `detailsState/${uuid()}`,
  default: {},
});

//파일 첨부
export const detailsFile = atom({
  key: `detailsFile/${uuid()}`,
  default: [],
});
