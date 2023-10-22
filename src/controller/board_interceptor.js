import axios from 'axios';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from './localStorage';

const boardInstance = axios.create({
  baseURL: 'url',
  headers: process.env.REACT_APP_BOARD_SERVICE_API,
});

boardInstance.interceptors.request.use((config) => {
  const accessToken = getLocalStorage('accessToken');

  config.headers['Content-Type'] = 'application/json';
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});
