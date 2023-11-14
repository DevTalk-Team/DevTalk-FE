import matchingInstance from './config/matching_interceptors';

export const consulterMatchingApi = {
  // 내담자 - 상담 전체 내역 조회
  searchConsulterAllConsultations: async () => {
    return matchingInstance
      .get('/consultants/searchAllConsultation')
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
};
