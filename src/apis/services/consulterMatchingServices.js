import { consulterMatchingApi } from '../consulterMatchingAxios';

// 내담자 - 상담 전체 내역 조회
export const searchConsulterAllConsultations = async () => {
  try {
    const res = await consulterMatchingApi.searchConsulterAllConsultations();
    const { code, result } = res.data;

    if (code === '0204') {
      return result;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
