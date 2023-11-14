import { paymentApi } from '../payment';

// 결제 정보 조회
export const approveConsultations = async (consultationId) => {
  try {
    const res = await paymentApi.getPaymentInfo(consultationId);
    const { code, result } = res.data;

    // TODO: Code 무엇?
    if (code === '0401') {
      return result;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 결제 링크 생성
export const createPaymentLink = async (consultationId) => {
  try {
    const res = await paymentApi.createPaymentLink(consultationId);
    const { code, result } = res.data;

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 결제 취소
export const cancelPaymentLink = async (consultationId) => {
  try {
    const res = await paymentApi.cancelPaymentLink(consultationId);
    const { code, result } = res.data;

    // TODO: Code 무엇?
    if (code === '0401') {
      return result;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// [TEST] 결제 정보 생성
export const createTestPaymentLink = async (data) => {
  try {
    const res = await paymentApi.createTestPaymentLink(data);
    const { code, result } = res.data;

    // TODO: Code 무엇?
    if (code === '0401') {
      return result;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
