import productInstance from './config/product_interceptors';

export const productApi = {
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
  updateProduct: async (data) => {
    return productInstance
      .put(`/update/products`, data)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  deleteProduct: async (data) => {
    return productInstance
      .delete(`/delete/products`, data)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  searchProduct: async (data) => {
    return productInstance
      .get(`/search/productInfo`, data)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  searchAllProduct: async (memberId) => {
    return productInstance
      .get(`/search/consultants/${memberId}`)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  searchByDateProduct: async (memberId, date) => {
    return productInstance
      .get(`/search/consultants/${memberId}/Date/${date}`)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
};
