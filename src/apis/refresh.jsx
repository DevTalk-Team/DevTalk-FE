import axios from 'axios';

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    const result = await axios.post(
      '/member/reissue',
      {}, // 데이터 없이 빈 객체 전달
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    console.log('리프레시 결과', result.data.result.accessToken);
    return result.data.result.accessToken;
  } catch (error) {
    console.error('리프레시 에러', error);
    throw error; // 예외 다시 던지기
  }
};
