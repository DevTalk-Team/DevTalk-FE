import axios, { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';
import { userEmailState } from '../../recoil/userAtom';
import { useEffect } from 'react';

const baseURL = process.env.REACT_APP_API_URL;

const productInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/product`,
  // baseURL: `/product`,
  headers: {
    // 'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

export const useProductAxios = () => {
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
    const request = productInstance.interceptors.request.use(
      requestIntetceptor,
      errorInterceptor
    );
    const response = productInstance.interceptors.response.use(
      responseIntetceptor,
      errorInterceptor
    );

    return () => {
      productInstance.interceptors.request.eject(request);
      productInstance.interceptors.response.use(response);
    };
  });

  return productInstance;
};

export default productInstance;
