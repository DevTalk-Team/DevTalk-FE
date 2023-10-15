import axios from 'axios';

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const result = await axios.post(
    // 리프레스토큰 보내고 새로운 accessToken받는 api
    {
      refreshToken,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return result.data;
};
