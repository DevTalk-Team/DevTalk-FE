import { productApi } from '../productApi';

// (전문가)상품 등록
export const addProduct = async (data) => {
  try {
    const res = await productApi.addProduct(data);
    console.log(res);

    if (res.status === 200) return true;

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// (전문가) 상품 수정
export const updateProduct = async (data) => {
  try {
    const res = await productApi.updateProduct(data);

    if (res.status === 200) return true;

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// (전문가) 상품 삭제
export const deleteProduct = async (data) => {
  try {
    const res = await productApi.deleteProduct(data);

    if (res.status === 200) return true;

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// (전문가) 상품 조회
export const searchProduct = async (data) => {
  try {
    const res = await productApi.deleteProduct(data);
    const { code, result } = res.data;

    if (code === '0502') return result;

    return {};
  } catch (error) {
    console.error(error);
    return {};
  }
};

// (전문가) 상품 전체 조회
export const searchAllProduct = async (memberId) => {
  try {
    const res = await productApi.searchAllProduct(memberId);
    const { code, result } = res.data;

    if (code === '0502') return result;

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// (전문가) 특정 날짜 상품 전체 조회
export const searchProductByDate = async (memberId, date) => {
  try {
    const res = await productApi.searchProductByDate(memberId, date);
    const { code, result } = res.data;

    if (code === '0502') return result;

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
