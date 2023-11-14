import { matchingApi } from '../matchingAxios';

// 상담사 - 상담 승인
export const approveConsultations = async (consultationId) => {
  try {
    const res = await matchingApi.approveConsultations(consultationId);
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

// 상담사 - 상담 취소 및 거절
export const cancelConsultations = async (consultationId) => {
  try {
    const res = await matchingApi.cancelConsultations(consultationId);
    const { reason } = res.data;

    // TODO: reason 말고 없나?

    return reason;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 상담사 - 취소된 상담 내역 조회
export const canceledConsultations = async (consultationId) => {
  try {
    const res = await matchingApi.canceledConsultations(consultationId);
    const { reason } = res.data;

    // TODO: reason 말고 없나?

    return reason;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 상담사 - 상담 전체 내역 조회
export const searchAllConsultations = async () => {
  try {
    const res = await matchingApi.searchAllConsultations();
    const { code, result } = res.data;

    if (code === '0206') {
      return result;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
