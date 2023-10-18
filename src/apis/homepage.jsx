import { getAuthAxios } from './authAxios';

export const getHomePage = async () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('엑세스토큰', accessToken);
  const authAxios = getAuthAxios(accessToken);
  const result = await authAxios.get('/member/mypage', {});
  console.log('결과물', result);
  return result;
};
