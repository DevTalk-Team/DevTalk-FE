import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userEmailState } from '../recoil/userAtom';

const boardInstance = axios.create({
  baseURL: '/board',
  // headers: process.env.REACT_APP_BOARD_SERVICE_API,
});

// TODO : eamil 저장해서 받아오는 로직 구현해야 됨.
boardInstance.interceptors.request.use((config) => {
  const userEmail = useRecoilValue(userEmailState);

  config.headers['Content-Type'] = 'application/json';
  config.headers['User-Email'] = userEmail;
  return config;
});

export default boardInstance;
