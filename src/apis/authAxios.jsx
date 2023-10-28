import axios from 'axios';
import { getNewRefreshToken } from './refresh';

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  authAxios.interceptors.response.use(
    (res) => {
      console.log('엑세스토큰 성공', res);
      return res;
    },
    async (error) => {
      if (error.response.status === 401) {
        console.log('엑세스토큰 만료다');

        try {
          const accessToken = await getNewRefreshToken();
          error.config.headers.Authorization = `Bearer ${accessToken}`;
          localStorage.setItem('accessToken', accessToken);
          console.log('새로운 액세스 토큰', accessToken);
          return await axios.get(error.config.url, error.config).data;
        } catch (refreshError) {
          console.error(refreshError);
        }
      } else if (error.response.status === 500) {
        console.log('에러', error.response);
      }

      throw error; // 예외 다시 던지기
    }
  );

  return authAxios;
};
