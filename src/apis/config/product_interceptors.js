import axios from 'axios';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from './localStorage';

const productInstance = axios.create({
  baseURL: 'url',
  headers: process.env.REACT_APP_PRODUCT_SERVICE_API,
});

productInstance.interceptors.request.use((config) => {
  const accessToken = getLocalStorage('accessToken');

  config.headers['Content-Type'] = 'application/json';
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

productInstance.interceptors.response.use((config) => {
  const accessToken = getLocalStorage('accessToken');

  config.headers['Content-Type'] = 'application/json';
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});
