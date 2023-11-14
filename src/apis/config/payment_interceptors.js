import axios, { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';
import { userEmailState } from '../../recoil/userAtom';
import { useEffect } from 'react';

const baseURL = process.env.REACT_APP_API_URL;

const paymentInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/payment`,
  // baseURL: `/payment`,
  headers: {
    // 'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

export const usePaymentAxios = () => {
  const userEmail = useRecoilValue(userEmailState);

  const requestIntetceptor = (config) => {
    config.headers['User-Email'] = userEmail;

    return config;
  };

  const responseIntetceptor = (response) => {
    return response;
  };

  const errorInterceptor = (error) => {
    if (error instanceof AxiosError) {
      console.error(
        `AxiosError(${error.response?.status}/${error.code}): ${error.message}\n${error.response?.path}`
      ); // 에러 출력
    } else {
      console.error(error.response);
    }
  };

  useEffect(() => {
    const request = paymentInstance.interceptors.request.use(
      requestIntetceptor,
      errorInterceptor
    );
    const response = paymentInstance.interceptors.response.use(
      responseIntetceptor,
      errorInterceptor
    );

    return () => {
      paymentInstance.interceptors.request.eject(request);
      paymentInstance.interceptors.response.use(response);
    };
  });

  return paymentInstance;
};

export default paymentInstance;
