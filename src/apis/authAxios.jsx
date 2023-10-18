import axios from 'axios';
import { getNewRefreshToken } from './refresh';

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    // baseURL:
    //   'http://devtalk-alb-2068504067.ap-northeast-2.elb.amazonaws.com:2172',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  authAxios.interceptors.response.use(
    (res) => {
      console.log('엑세스토큰 성공', res);
    },
    async (error) => {
      if (error.response.status === 401) {
        console.log('엑세스토큰 만료다');

        const { accessToken, refreshToken } = await getNewRefreshToken();
        error.config.headers.Authorization = accessToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        console.log('토큰들', accessToken, refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
      }
      if (error.response.status === 500) {
        console.log('에러', error.response);
      }
    }
  );
  return authAxios;
};
