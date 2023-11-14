import paymentInstance from './config/payment_interceptors';

export const paymentApi = {
  // 결제 정보 조회
  getPaymentInfo: async (consultationId) => {
    return paymentInstance
      .get(`/${consultationId}/info`)
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
  // 결제 링크 생성
  createPaymentLink: async (consultationId) => {
    return paymentInstance
      .get(`/${consultationId}/link`)
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
  // 결제 취소
  cancelPaymentLink: async (consultationId) => {
    return paymentInstance
      .delete(`/${consultationId}/cancel`)
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
  // [TEST] 결제 정보 생성
  createTestPaymentLink: async (data) => {
    return paymentInstance
      .post(`/link`, data)
      .catch((err) => {
        console.warn(err);
      })
      .then((res) => {
        return res;
      });
  },
};
