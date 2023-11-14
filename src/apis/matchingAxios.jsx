import matchingInstance from './config/matching_interceptors';

export const matchingApi = {
  // 상담사 - 상담 승인
  approveConsultations: async (consultationId) => {
    return matchingInstance
      .post(`/consultants/approve/consultations/${consultationId}`)
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
  // 상담사 - 상담 취소 및 거절
  cancelConsultations: async (consultationId) => {
    return matchingInstance
      .delete(`/consultants/cancel/consultations/${consultationId}`)
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
  // 상담사 - 취소된 상담 내역 조회
  canceledConsultations: async (consultationId) => {
    return matchingInstance
      .get(
        `/consultants/canceled-consultations/consultations/${consultationId}`
      )
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
  // 상담사 - 상담 전체 내역 조회
  searchAllConsultations: async () => {
    return matchingInstance
      .get('/consultants/searchAllConsultation/consultations')
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
};
