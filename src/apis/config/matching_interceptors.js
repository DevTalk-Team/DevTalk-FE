import axios, { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';
import { userEmailState } from '../../recoil/userAtom';
import { useEffect } from 'react';

const baseURL = process.env.REACT_APP_API_URL;

const matchingInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/matching`,
  // baseURL: `/matching`,
  headers: {
    // 'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

export const useMatchingAxios = () => {
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
    const request = matchingInstance.interceptors.request.use(
      requestIntetceptor,
      errorInterceptor
    );
    const response = matchingInstance.interceptors.response.use(
      responseIntetceptor,
      errorInterceptor
    );

    return () => {
      matchingInstance.interceptors.request.eject(request);
      matchingInstance.interceptors.response.use(response);
    };
  });

  return matchingInstance;
};

export default matchingInstance;
