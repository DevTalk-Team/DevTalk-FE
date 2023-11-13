import productInstance from './config/product_interceptors';

export const productApi = {
  // (전문가)상품 등록
  addProduct: async (data) => {
    return productInstance
      .post('/regist/products', data)
      .catch((err) => {
        console.warn(err);
        return [];
      })
      .then((res) => {
        return res;
      });
  },
  // (전문가) 상품 수정
  updateProduct: async (data) => {
    return productInstance
      .put(`/update/products`, data)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  // (전문가) 상품 삭제
  deleteProduct: async (data) => {
    return productInstance
      .delete(`/delete/products`, data)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  // (전문가) 상품 조회
  searchProduct: async (data) => {
    return productInstance
      .get(`/search/productInfo`, data)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  // (전문가) 상품 전체 조회
  searchAllProduct: async (memberId) => {
    return productInstance
      .get(`/search/consultants/${memberId}`)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  // (전문가) 특정 날짜 상품 전체 조회
  searchProductByDate: async (memberId, date) => {
    return productInstance
      .get(`/search/consultants/${memberId}/Date/${date}`)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
};
